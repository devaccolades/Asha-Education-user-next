"use client";
import { useState } from "react";
import { contactForm } from "@/services/api";
import Image from "next/image";
import Address from "../../assets/about-us/address-icon.svg";
import Phone from "../../assets/about-us/phone-icon.svg";
import Mail from "../../assets/about-us/mail-icon.svg";
import arrow from "../../assets/contact-us/arrow.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

// Reusable form input component
const FormField = ({ field, formData, handleChange }) => (
  <div className="flex flex-col w-full">
    <label className="font-inter text-[14px] leading-[20px] mb-1 font-semibold">
      {field.label}*
    </label>
    <input
      type={field.type}
      name={field.name}
      value={formData[field.name]}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent font-inter font-normal text-[14px] leading-[20px]"
      placeholder={field.placeholder}
    />
  </div>
);

const FormTextArea = ({ formData, handleChange }) => (
  <div className="flex flex-col">
    <label className="font-inter text-[14px] leading-[20px] mb-1 font-medium">
      Message
    </label>
    <textarea
      name="message"
      rows={4}
      value={formData.message}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent"
      placeholder="Type..."
    ></textarea>
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="flex items-center justify-center gap-2 mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition-all duration-300 w-full md:w-[150px] h-[48px] text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF383B]"
  >
    Submit
    <Image src={arrow} alt="Arrow" width={12} height={12} />
  </button>
);

function WeHelp({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactForm(formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Brian Clark" },
    { label: "Phone", name: "phone", type: "tel", placeholder: "(123) 456 - 7890" },
    { label: "Email", name: "email", type: "email", placeholder: "example@youremail.com" },
  ];

  return (
    <div className="containers flex flex-col md:flex-row justify-between items-stretch py-[10px] md:py-[50px] ">
      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }} className="lg:w-[38%] md:w-[45%] lg:mr-50">
        <h1 className="font-open-sans lg:text-[40px] md:text-[32px] text-[24px] leading-[24px] md:leading-[32px] lg:leading-[40px]">
        Count on Us for Support!
        </h1>
        {/* <p className="font-rubik mt-4 text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[21px] lg:leading-[24px]">
          Our dedicated team is here to support your educational journey. Contact us for personalized guidance and assistance.
        </p> */}
        <p className="font-rubik mt-4 text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[21px] lg:leading-[24px]">
        One Call, No Hassle – Get Straightforward Upskilling Guidance! <br /> Request a Call Back at a Time That Works for You and Speak with Our Expert Counselor.
        </p>


        <div className="space-y-6 mt-6">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="flex items-start space-x-4">
            <Image src={Address} alt="Address" className="w-[38px] h-[40px]" />
            <span className="text-black font-rubik text-[14px] md:text-[16px] lg:text-[20px] leading-[21px] md:leading-[24px] lg:leading-[28px]">
              {data.address}
            </span>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="flex items-start space-x-4">
            <Image src={Phone} alt="Phone" className="w-[38px] h-[40px]" />
            <span className="text-black font-rubik text-[14px] md:text-[16px] lg:text-[20px] leading-[28px]">
              {data.phone}
            </span>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="flex items-start space-x-4">
            <Image src={Mail} alt="Email" className="w-[38px] h-[40px]" />
            <span className="text-black font-rubik text-[14px] md:text-[16px] lg:text-[20px] leading-[28px]">
              {data.email}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Section */}
      <div className="lg:w-[50%] md:w-[52%] mt-6 md:mt-0 flex items-end ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full bg-white p-6 rounded-[20px] shadow-2xl h-full">
          <form className="flex flex-col gap-2 text-[#6D758F]" onSubmit={handleSubmit}>
            {/* Responsive Name & Phone */}
            <div className="flex flex-col md:flex-row gap-1">
              {formFields.slice(0, 2).map((field, idx) => (
                <motion.div className="w-full md:w-1/2" key={idx} initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * idx }}
                  viewport={{ once: true }}>
                  <FormField field={field} formData={formData} handleChange={handleChange} />
                </motion.div>
              ))}
            </div>

            {/* Email Field */}
            <FormField field={formFields[2]} formData={formData} handleChange={handleChange} />

            {/* Message */}
            <FormTextArea formData={formData} handleChange={handleChange} />

            {/* Submit Button */}
            <SubmitButton />
          </form>
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default WeHelp;

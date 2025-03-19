'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import UploadIcon from '../../../public/careers/upload.svg';


function NormalForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const fileInputRef = useRef(null);

  const jobSuggestion = [
    { id: 'dev', job_title: 'Developer' },
    { id: 'designer', job_title: 'Designer' },
    { id: 'manager', job_title: 'Manager' },
  ];

  const locations = [
    { location: 'New York' },
    { location: 'San Francisco' },
    { location: 'Los Angeles' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    setIsLoad(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoad(false);
      alert('Form submitted successfully!');
    }, 2000);
  };

  const isFormFilled =
    formData.name &&
    formData.phone &&
    formData.email &&
    selectedPosition &&
    selectedLocation;

  return (
    <section className='px-[1px] md:px-[50px]'>
      <div className='containers'>
        <div className='p-[20px]  border bg-grey-400 rounded-[20px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
            {/* Name Field */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Name</p>
              <input
                name='name'
                value={formData.name}
                onChange={handleInputChange} 
                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none'
                placeholder='Enter Your Name'
                type='text'
              />
            </div>

            {/* Position Field */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Position</p>
              <select
                name='position'
                value={selectedPosition}
                onChange={handlePositionChange}
                className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter focus:outline-none ${
                  selectedPosition ? 'text-black' : 'text-[#BABABA]'
                }`}
              >
                <option value='' disabled>
                  Select Job Position
                </option>
                {jobSuggestion.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.job_title}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Field */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Phone No</p>
              <input
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none'
                placeholder='Enter Phone Number'
                type='number'
              />
            </div>

            {/* Location Field */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Location</p>
              <select
                name='location'
                value={selectedLocation}
                onChange={handleLocationChange}
                className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter focus:outline-none ${
                  selectedLocation ? 'text-black' : 'text-[#BABABA]'
                }`}
              >
                <option value='' disabled>
                  Select Location
                </option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc.location}>
                    {loc.location}
                  </option>
                ))}
              </select>
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Email</p>
              <input
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none'
                placeholder='Enter Email'
                type='email'
              />
            </div>

            {/* Upload CV */}
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] md:text-[14px] leading-[12px] font-inter text-red-500'>Upload CV</p>
              <div className='relative'>
                <input
                  className={`w-full h-[40px] pl-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter focus:outline-none cursor-pointer ${
                    selectedFile ? 'text-black' : 'text-[#BABABA]'
                  }`}
                  value={selectedFile ? selectedFile.name : 'Choose File'}
                  type='text'
                  onClick={handleFileInputClick}
                  readOnly
                />
                 <Image
                  src={UploadIcon}
                  alt='upload'
                  width={20}
                  height={20}
                  className='absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer'
                  onClick={handleFileInputClick}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  className='hidden'
                  onChange={handleFileChange}
                />
              </div>
              <div className='font-inter mt-2 text-red-500 text-[10px] md:text-[11px] leading-[12px]'>
                <p>Allowed file types: pdf, doc, docx, rtf</p>
                <p>Maximum file size allowed: 5MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='mt-6 md:flex md:justify-end'>
            <button
              onClick={handleSubmit}
              className={`w-full md:w-auto text-white bg-red-500 text-[12px] md:text-[15px] leading-[20px] px-2 md:px-6 py-2 rounded-md transition-all duration-300 ${
                isFormFilled ? '' : 'cursor-not-allowed'
              }`}
              disabled={!isFormFilled || isLoad}
            >
              {isLoad ? 'Loading...' : 'Submit'}
            </button>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default NormalForm;

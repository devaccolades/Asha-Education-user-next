"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import University from "../../assets/about-us/unilogo.png";
import Uimage from "../../assets/about-us/uimage1.jpg";
import bg from '../../assets/home/programsection/bg1.svg'


const studentTestimonials = [
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Amit Sharma",
    course: "B.Tech in Computer Science",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Priya Verma",
    course: "MBA in Finance",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Rahul Mehta",
    course: "B.Sc in Biotechnology",
  },
];

const StudentSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full mt-6 px-4 md:px-0 pb-16 md:pb-0">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="px-4 md:px-10"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {studentTestimonials.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white text-black rounded-[20px] overflow-hidden shadow-lg w-full max-w-3xl mx-auto md:min-h-[300px]">
              <div className="md:w-[260px] lg:w-[300px] h-[180px] md:h-[300px] relative">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover md:rounded-tl-[8px]"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col">
                <div className="mb-4">
                  <Image
                    src={student.logo}
                    alt="University Logo"
                    width={91}
                    height={37}
                    className="w-[70px] h-[30px] md:w-[91px] md:h-[37px]"
                  />
                </div>

                <div className="flex-grow mb-4">
                  <p className="font-normal text-[13px] lg:text-[14px] leading-[20px] lg:leading-[22px] font-inter">
                    {student.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] leading-[22px] text-grey-600 font-open-sans">
                    <span className="font-semibold">{student.name}</span>
                    <span className="block font-bold">{student.course}</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-[90%] md:top-1/2 left-[60%] sm:left-[70%] md:-left-18 lg:-left-4 xl:left-2 right-2 md:-right-18 lg:-right-4 xl:right-2 flex justify-between md:-translate-y-1/2 z-10 px-4 md:px-0 mt-6 md:mt-0 mb-4">
        <button
          ref={prevRef}
          className="group w-10 h-10 flex items-center justify-center border-2 border-white rounded-md bg-transparent transition-all hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5 text-white transition-all group-hover:text-red-500" />
        </button>

        <button
          ref={nextRef}
          className="group w-10 h-10 flex items-center justify-center border-2 border-white rounded-md bg-transparent transition-all hover:bg-white"
        >
          <ArrowRight className="w-5 h-5 text-white transition-all group-hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

function SuccessfulStudents() {
  return (
    <section className="bg-red-500 text-white py-14 px-4 md:px-[100px] relative"
    style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                }}>
      <h2
        className="font-open-sans text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[40px] lg:leading-[48px] font-semibold text-center mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 68.84%, #FF383B 117.39%)",
        }}
      >
        Hear from Our <br /> Successful Students
      </h2>
      <p className="text-center font-inter font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] mb-8">
        98% of students achieved their admission goals.
      </p>
      <StudentSwiper />
    </section>
  );
}

export default SuccessfulStudents;
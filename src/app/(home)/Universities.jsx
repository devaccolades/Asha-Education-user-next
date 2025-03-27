"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PartnerCard from "@/components/home/PartnerCard";
import Image from "next/image";

import img1 from '../../assets/home/partnersection/cardimg1.webp'
import img2 from '../../assets/home/partnersection/cardimg2.webp'
import img3 from '../../assets/home/partnersection/cardimg3.webp'
import img4 from '../../assets/home/partnersection/cardimg4.webp'

import logo1 from '../../assets/home/partnersection/dpu.png'
import logo2 from '../../assets/home/partnersection/nmims.png'
import logo3 from '../../assets/home/partnersection/amity.png'
import logo4 from '../../assets/home/partnersection/manipal.png'

import arrow from '../../assets/home/herosection/Arrow.svg'
import arrowright from '../../assets/home/partnersection/darkarrowright.svg'

// University & Course Data
const universityData = [
    {
        id: 1,
        name: "DY Patil",
        logo: logo1,
        courses: [
            { id: 1, image: img1, title: "MBA", subtitle: "Partnering with top universities for world-class MBA programs." },
            { id: 2, image: img2, title: "BBA", subtitle: "Unlock global business education with our trusted BBA partners." },
            { id: 3, image: img3, title: "BCOM", subtitle: "Study commerce at leading universities with excellent faculty." },
            { id: 4, image: img4, title: "BCA", subtitle: " Advance in technology with our premier BCA university partners." },
        ],
    },
    {
        id: 2,
        name: "NMIMS",
        logo: logo2,
        courses: [
            { id: 1, image: img1, title: "MBA", subtitle: "Partnering with top universities for world-class MBA programs." },
            { id: 2, image: img2, title: "BBA", subtitle: "Unlock global business education with our trusted BBA partners." },
            { id: 3, image: img3, title: "BCOM", subtitle: "Study commerce at leading universities with excellent faculty." },
            { id: 4, image: img4, title: "BCA", subtitle: " Advance in technology with our premier BCA university partners." },
        ],
    },
    {
        id: 3,
        name: "Amity",
        logo: logo3,
        courses: [
            { id: 1, image: img1, title: "MBA", subtitle: "Partnering with top universities for world-class MBA programs." },
            { id: 2, image: img2, title: "BBA", subtitle: "Unlock global business education with our trusted BBA partners." },
            { id: 3, image: img3, title: "BCOM", subtitle: "Study commerce at leading universities with excellent faculty." },
            { id: 4, image: img4, title: "BCA", subtitle: " Advance in technology with our premier BCA university partners." },
        ],
    },
    {
        id: 4,
        name: "Manipal University",
        logo: logo4,
        courses: [
            { id: 1, image: img1, title: "MBA", subtitle: "Partnering with top universities for world-class MBA programs." },
            { id: 2, image: img2, title: "BBA", subtitle: "Unlock global business education with our trusted BBA partners." },
            { id: 3, image: img3, title: "BCOM", subtitle: "Study commerce at leading universities with excellent faculty." },
            { id: 4, image: img4, title: "BCA", subtitle: " Advance in technology with our premier BCA university partners." },
        ],
    },
];

const Universities = () => {
    const [selectedUniversity, setSelectedUniversity] = useState(universityData[0]);

    return (
        <>
            <div className="relative mx-auto text-center my-10 ">
                <h1 className="text-4xl md:text-[30px] font-semibold text-gray-900">
                    Our Prestigious Partner Universities
                </h1>
                <p className="mt-4 text-[16px] text-gray-600 w-[52%] mx-auto font-rubik font-normal leading-[24px]">
                    Explore our network of globally recognized partner universities, offering diverse programs and exceptional academic opportunities for students worldwide
                </p>
            </div>
            <section className="relative py-10 flex justify-between gap-36 items-start w-[92%] ml-auto">
                {/* Left: University Buttons */}
                <div className="flex flex-col gap-4 min-w-[200px]">
                    {universityData.map((university) => (
                        <button
                            key={university.id}
                            className={` w-full flex flex-row md:flex-col lg:flex-row items-center justify-start gap-2 px-4 py-2 border rounded-md text-black text-sm md:text-base font-normal transition-all font-rubik text-left whitespace-nowrap
                                ${selectedUniversity.id === university.id ? "border-[#0A0078] text-black" : "border-gray-300 bg-white hover:bg-gray-100"}
                            `}
                            onClick={() => setSelectedUniversity(university)}
                        >
                            <Image
                                src={university.logo}
                                alt={university.name}
                                className="h-8 w-8 object-contain"
                            />
                            <span>{university.name}</span>
                        </button>
                    ))}

                    {/* Desktop Buttons (Hidden on small screens) */}
                    <div className="flex flex-col justify-between w-full max-w-[640px] mx-auto gap-2 items-center mt-6 hidden md:flex">
                        <button
                            className="flex items-center justify-center font-inter font-semibold gap-2 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                            }}
                        >
                            Browse all Programs
                            <Image
                                src={arrow}
                                alt="Arrow"
                                className="w-[10px] h-[10px]"
                            />
                        </button>

                        <button
                            className="flex items-center justify-center font-inter font-semibold gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full border border-gray-300 bg-white hover:bg-gray-100"
                        >
                            Compare Universities
                            <Image
                                src={arrowright}
                                alt="Arrow"
                                className="w-[10px] h-[10px]"
                            />
                        </button>
                    </div>

                </div>

                {/* Right: Swiper Carousel */}
                <div className="w-full flex justify-end">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 5, spaceBetween: 10 },
                        }}
                        className="w-full"
                    >
                        {selectedUniversity.courses.map((course) => (
                            <SwiperSlide key={course.id} className="flex justify-center">
                                <PartnerCard {...course} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div className="flex justify-between w-full max-w-[640px] mx-auto gap-2 items-center mt-6 md:hidden">
                <button
                    className="flex items-center justify-center font-inter font-semibold gap-2 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                    }}
                >
                    Browse all Programs
                    <Image
                        src={arrow}
                        alt="Arrow"
                        className="w-[10px] h-[10px]"
                    />
                </button>

                <button
                    className="flex items-center justify-center font-inter font-semibold gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full border border-gray-300 bg-white hover:bg-gray-100"
                >
                    Compare Universities
                    <Image
                        src={arrowright}
                        alt="Arrow"
                        className="w-[10px] h-[10px]"
                    />
                </button>
            </div>

        </>
    );
};

export default Universities;
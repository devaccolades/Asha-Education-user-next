"use client";
import ProgramCard from "@/components/home/ProgamCard";
import React, { useState } from "react";
import img1 from '../../assets/home/programsection/cardimg1.png'
import img2 from '../../assets/home/programsection/cardimg2.png'
import img3 from '../../assets/home/programsection/cardimg3.png'
import img4 from '../../assets/home/programsection/cardimg4.png'

import bg from '../../assets/home/programsection/bg.svg'
import topleft from '../../assets/topleft.svg'
import topright from '../../assets/topright.svg'
import bottomleft from '../../assets/bottomleft.svg'
import bottomright from '../../assets/bottomright.svg'

import lines from '../../assets/home/programsection/lines.svg'

const programs = [
    { image: img1, title: "Undergraduate Programs" },
    { image: img2, title: "Postgraduate Programs" },
    { image: img3, title: "Doctoral Programs" },
    { image: img4, title: "Specialized MBAs" },
];

const ProgramsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first card hovered
    console.log(bg);  // Should print the resolved path of bg.svg
    console.log(topleft);

    return (
        <div className="flex w-full mx-auto">
            {/* Left Section (40%) */}
            <div
                className="w-[30%] flex flex-col justify-center items-center relative p-8 ml-16 text-black"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* SVG Decorations */}
                <div
                    className="absolute top-6 left-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${topleft.src})` }}
                ></div>

                <div
                    className="absolute top-6 right-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${topright.src})`  }}
                ></div>

                <div
                    className="absolute bottom-6 left-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${bottomleft.src})`  }}
                ></div>

                <div
                    className="absolute bottom-6 right-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${bottomright.src})`  }}
                ></div>

                {/* Text Content */}
                <div className="text-left max-w-[65%]">
                    <h2 className="text-4xl font-bold relative z-10">Find the Right Program for You</h2>
                    <p className="text-lg relative z-10 mt-2">
                    Discover the perfect program tailored to your goals with expert guidance and a wide range of academic choices.
                    </p>
                </div>
            </div>

            {/* Right Section (60%) */}
            <div className="relative w-[70%] flex gap-[6px] p-6 justify-between max-w-[65%] 2xl:max-w-[52%] ml-8 2xl:ml-16">

                {/* Background Overlay */}
                <div
                    className="absolute inset-0 z-50 pointer-events-none"
                    style={{
                        backgroundImage: `url(${lines.src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Cards */}
                {programs.map((program, index) => (
                    <ProgramCard
                        key={index}
                        image={program.image}
                        title={program.title}
                        hover={hoveredIndex === index}
                        previousHover={hoveredIndex}
                        onMouseEnter={() => setHoveredIndex(index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProgramsSection;

"use client";
import React, { useState } from "react";
import filterIcon from "../../../src/assets/universities/Vector.svg";
import tick from "../../assets/comparison/tick.svg";
import cross from "../../assets/comparison/cross.svg";
import plus from "../../assets/comparison/plus.svg";
import Image from "next/image";
import { Courses } from "./Data";
import { cardData } from "./Data";

import star from "../../assets/universities/star.svg";
import once from "../../assets/universities/once.svg";
import arrow from "../../assets/universities/arrow.svg";
import { ProgramCard } from '../../app/programs/ProgramCard';

const Listing = ({data}) => {
  const [selectedCourse, setSelectedCourse] = useState(Courses[0]);
  const [comparedLogos, setComparedLogos] = useState([]);

  const handleAddToCompare = (logo) => {
    if (comparedLogos.length < 2) {
      setComparedLogos([...comparedLogos, logo]);
    }
  };

  const handleRemoveLogo = (index) => {
    setComparedLogos(comparedLogos.filter((_, i) => i !== index));
  };

  const [selectedProgram, setSelectedProgram] = useState(data[0]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  // Unique programs by program_type_name
  const uniquePrograms = Array.from(
    new Set(data.map(p => p.specialization?.program_type_name))
  ).map(programType => data.find(p => p.specialization?.program_type_name === programType));

  // Specializations under selected program
  const specializationList = Array.from(
    new Set(
      data
        .filter(p => p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name)
        .map(p => p.specialization?.name)
    )
  );

  // Filter programs
  const filteredPrograms = data.filter(p =>
    p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name &&
    (selectedSpecialization ? p.specialization?.name === selectedSpecialization : true)
  );


  return (
    <>
      <section className="containers border-b border-b-[#E1E4ED]">
        <div className="mx-auto flex justify-between items-center py-5 overflow-scroll">
          <ul className="flex gap-[6px]">
            {uniquePrograms.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedProgram(item);
                  setSelectedSpecialization(null);
                }}
                className={`cursor-pointer ${selectedProgram.specialization?.program_type_name === item.specialization?.program_type_name
                  ? "bg-[#FF383B] text-white"
                  : "bg-white text-[#6D758F] border border-[#D9D9D9]"
                  } hover:bg-[#FF383B] p-[14px] md:px-[22px] md:py-[18px] text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
              >
                {item.specialization.program_type_name}
              </li>
            ))}
          </ul>
          {/* <ul className="flex gap-2 items-center">
            <Image src={filterIcon} alt="icon" height={18} />
            <span className="text-[#FF383B] text-[16px]">Filter by state</span>
          </ul> */}
        </div>

        <div className="mx-auto grid md:grid-cols-[25%_1fr] gap-[10px] pt-5 pb-10">
          {/* First column for specializations */}
          <div>
            

            {/* Compare section */}
            {comparedLogos.length > 0 && (
              <div className="px-[10px] py-[10px] flex gap-4 flex-col rounded-[6px] border-[1px] border-[#0A0078] mb-4">
                <h1 className="font-rubik font-normal text-[16px] leading-[16px] text-[#696969]">
                  {selectedCourse.specs[0]}
                </h1>
                <div className="flex gap-2 my-2 items-center">
                  {comparedLogos.map((logo, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative">
                        <Image
                          src={logo}
                          alt="compared logo"
                          width={40}
                          height={40}
                          className="h-10 w-auto object-contain rounded-[5px] border border-[#EDEDED] px-1"
                        />
                        <Image
                          src={cross}
                          alt="cross"
                          className="absolute -top-2 -right-2"
                          onClick={() => handleRemoveLogo(index)}
                        />
                      </div>
                      {index < comparedLogos.length - 1 && (
                        <Image
                          src={plus}
                          alt="add more"
                          className="h-6 w-6"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <button className="bg-[#FF383B] py-[10px] font-inter font-semibold text-[12px] leading-[18px] text-[#FFFFFF] rounded-[8px] shadow-md">
                  Show Result
                </button>
              </div>
            )}

            {/* Mobile select dropdown */}
            <select
              className="md:hidden p-[16px] text-[#696969] text-[12px] border border-[#F1F3F7] bg-white rounded-[6px] w-fit
                             hover:ring-2 hover:ring-[#FF383B] focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
              value={selectedSpecialization || ""}
              onChange={(e) =>
                setSelectedSpecialization(e.target.value || null)
              }
            >
              <option value="">Select Specialization</option>
              {specializationList.map((spec, i) => (
                <option key={i} value={spec}>{spec}</option>
              ))}
            </select>

            {/* MD+ specialization list */}
            <div className="hidden md:flex flex-col gap-3">
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold ">Specialisations</h2>
              <ul className="flex flex-col gap-2">
                {specializationList.map((spec, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      setSelectedSpecialization(prev =>
                        prev === spec ? null : spec
                      )
                    }
                    className={`cursor-pointer p-[16px] text-[14px] rounded-[6px] border  shadow-lg
                                        ${selectedSpecialization === spec
                        ? "border-[#FF383B] text-[#FF383B]"
                        : "bg-white text-[#696969] border-[#F1F3F7]"
                      }`}
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Second column for cards */}
          <div className="flex flex-col xl:mx-8">
            <div className="grid grid-row md:grid-cols-2 gap-2 xl:gap-16">
              {/* {filteredPrograms.map((item, index) => (
                <ProgramCard key={index} item={item} />
              ))} */}
              {filteredPrograms.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  onAddToCompare={() => handleAddToCompare(item.university.logo)}
                  isCompareDisabled={comparedLogos.length >= 2}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Card = ({ item, onAddToCompare, isCompareDisabled }) => {
  console.log("carddata",item);

  return (
    <section
      className="h-auto flex flex-col gap-3 md:gap-3.5 lg:gap-4 border border-[#0A0078] rounded-[18px] 
      md:px-2.5 pt-2.5 pb-3 md:pt-3 md:pb-4 lg:pb-5
      hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] 
      cursor-pointer transition-shadow duration-200"
    >
      {/* Image Container - Adjusted for tablet spacing */}
      <div
        className="relative z-10 h-[180px] md:h-[200px] lg:h-[230px] w-full rounded-[8px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.university.cover_image})` }}
      >
        {/* Logo - Adjusted positioning for tablet */}
        <span className="absolute top-2 md:top-3 left-2 w-[90px] h-[30px] md:w-[80px] md:h-[30px] lg:w-[120px] lg:h-[50px] bg-white rounded-[5px] flex justify-center items-center p-1">
          <Image
            src={item.university.logo}
            fill
            alt="logo"
            className="object-contain w-full h-full"
          // sizes="(max-width: 768px) 90px, (max-width: 1024px) 95px, 120px"
          />
        </span>

        {/* Status Badge - Adjusted positioning and padding for tablet */}
        {item.admission_status === "open" && (
          <span
            className="absolute top-3 md:top-3.5 right-0 flex justify-center items-center h-[26px] md:h-[27px] lg:h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-3 md:px-4 lg:px-5"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            <span className="text-white text-xs md:text-[12px] lg:text-[14px] font-semibold whitespace-nowrap ">
              Admissions Ongoing
            </span>
          </span>)}
      </div>

      {/* Rest of the card content remains the same as previous optimized version */}
      <div className="w-full px-1 md:px-1.5 flex flex-col gap-2 md:gap-2.5 lg:gap-3">
        {/* <h2 className="text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight font-semibold">
        {item.program_name.full_name}
        </h2> */}
        <h2 className="text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight font-semibold">
        {item.university.name}
        </h2>

        <span className="flex justify-start items-center gap-1.5 md:gap-2">
          <Image
            src={star}
            alt="icon"
            className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-xs md:text-[13px] lg:text-[14px]">{item.rating}</span>
        </span>

        <span className="w-fit bg-[#FFE3E4] inline-flex items-center justify-start gap-2 px-3 md:px-3.5 py-1.5 rounded-[8px]">
          <Image
            src={once}
            alt="icon"
            className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-xs md:text-[13px] lg:text-[14px] text-[#FF383B] whitespace-nowrap">
            Brouchure
          </span>
        </span>

        <span className="text-[#6D758F] text-xs md:text-[13px] lg:text-[14px] xl:text-[16px]">
          {item.affiliation}
        </span>

        <div className="flex justify-between gap-2 md:gap-3 items-center mt-1">
          <button
            className={`flex-1 flex justify-center items-center ${isCompareDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#FF383B] hover:bg-[#E53134] cursor-pointer"
              } text-white font-semibold text-xs md:text-[13px] lg:text-[12px] py-2 rounded-[8px] whitespace-nowrap transition-colors duration-200`}
            onClick={!isCompareDisabled ? onAddToCompare : undefined}
            disabled={isCompareDisabled}
          >
            <Image
              src={tick}
              alt="tick"
              className="mr-1 md:mr-1.5 lg:mr-2 w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
            />
            Add to compare
          </button>

          <button
            className="flex-1 text-xs md:text-[13px] lg:text-[14px] text-[#6D758F] font-semibold rounded-[8px] 
            flex justify-center items-center border border-[#D9D9D9] px-2 py-2 md:px-3 hover:bg-gray-50 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Listing;
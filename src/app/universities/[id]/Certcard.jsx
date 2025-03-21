import React from 'react'
import Image from "next/image";

const Certcard = ({ imgSrc, title }) => {
    return (
      <div className="max-w-xs bg-white py-6 flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-24 h-24 mb-4">
          <Image src={imgSrc} alt={title} className="w-full h-full object-contain" />
        </div>
  
        {/* Text */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
       
      </div>
    );
  };

export default Certcard

"use client";
import React, { useState } from "react";

const TrustSection = () => {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1440px] w-full p-8 flex items-center justify-between">
                <div className="w-[40%] relative">
                    {playVideo ? (
                        <ReactPlayer
                            url={null}
                            width="450px"
                            height="450px"
                            className="rounded-xl shadow-lg"
                            controls
                        />
                    ) : (
                        <div
                            className="w-full h-full cursor-pointer relative"
                            onClick={() => setPlayVideo(true)}
                        >
                            <img
                                src="/home/Trustsection/thumbnail.webp" // Replace with actual thumbnail
                                alt="Video Thumbnail"
                                className="w-[450px] h-[450px] rounded-xl shadow-lg object-cover"
                            />
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src="/home/Trustsection/play.svg" alt="Play Button" className="w-16 h-16 opacity-80" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section (Text - 60%) */}
                <div className="w-[55%] flex flex-col gap-6">
                    {/* Title & Subtitle */}
                    <div className="w-[90%]">

                        <h2 className="text-[30px] font-bold">Why Thousands of Students  <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                            }}
                        >Trust Us</span></h2>
                        <p className="text-[16px] text-gray-600 w-[70%]">
                            Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere
                        </p>

                        {/* Feature Boxes (2 per row) */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { logo: "/topright.svg", title: "Partnered with top universities in India.", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elitolmel." },
                                { logo: "/topright.svg", title: "Personalized counseling and admission guidance.", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elitolmel." },
                                { logo: "/topright.svg", title: "Flexible learning options: online and offline.", subtitle: "SLorem ipsum dolor sit amet consectetur adipiscing elitolmel." },
                                { logo: "/topright.svg", title: "Track record of successful placements.", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elitolmel." },
                            ].map((feature, index) => (
                                <div key={index} >
                                    <div className="flex items-start gap-4 p-4">
                                        <img src={feature.logo} alt={feature.title} className="w-12 h-12" />
                                        <h3 className="text-lg text-[20px] font-semibold leading-[20px]">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-[16px] leading-[24px] text-gray-500 w-[90%] mx-auto">{feature.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        {/* Download Button & Small Text */}
                        <div className="flex items-center gap-4 mt-4">
                            <button className=" text-white px-6 py-2 rounded-lg transition"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                                }}
                            >
                                Download Now
                            </button>
                            <span className="text-sm text-gray-500 w-[40%]">Want to know more? Download our brochure for detailed insights.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustSection;

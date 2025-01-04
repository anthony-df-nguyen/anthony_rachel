"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import { images } from "../CloudinaryGallery/constants";
import "react-slideshow-image/dist/styles.css";
import CountdownTimer from "../Countdown";

const HeroImage = () => {
  const img = images[0];
  return (
    <div className="bg-black relative w-screen h-screen max-h-[1200px] overflow-hidden">
      <CldImage
        src={`https://res.cloudinary.com/dyiydoztx/image/upload/c_fill,w_auto:breakpoints,h_auto:breakpoints,q_auto,f_auto/v${img.version}/${img.display_name}.jpg`}
        alt={`Image ${img}`}
        width={img.width}
        height={img.height}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="fancy text-white text-center text-6xl drop-shadow-lg">
          Rachel & Anthony
        </div>
        <div className="mt-4 body text-center text-white text-xl drop-shadow-lg">
          September 20 2025
        </div>
        <div className="mt-4 body text-center text-white text-md drop-shadow-lg">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
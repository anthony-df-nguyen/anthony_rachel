"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { images } from "../CloudinaryGallery/constants";
import "react-slideshow-image/dist/styles.css";

type Props = {
  landscapePhotoIndex: number;
  portraitPhotoIndex: number;
  breakpoint: number;
  children?: React.ReactElement | React.ReactElement[];
  opacity: number;
  justify?: string;
};

const HeroImage = ({
  landscapePhotoIndex = 0,
  portraitPhotoIndex = 0,
  breakpoint = 780,
  children = <></>,
  opacity = 0.5,
  justify = "center",
}: Props) => {
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null); // Initial state is null
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  // Update the image mode (landscape/portrait) on screen resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
      setIsLandscape(window.innerWidth > breakpoint);
    };

    // Only runs on the client-side
    setCurrentWidth(window.innerWidth);
    setIsLandscape(window.innerWidth > breakpoint);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  // Select the appropriate image based on screen width
  const img =
    isLandscape !== null
      ? images[isLandscape ? landscapePhotoIndex : portraitPhotoIndex]
      : images[portraitPhotoIndex]; // Fallback during initial render

  return (
    <div className="bg-black relative w-screen h-screen max-h-[1200px] overflow-hidden">
      {isLandscape !== null && (
        <CldImage
          src={`https://res.cloudinary.com/dyiydoztx/image/upload/c_fill,w_auto:breakpoints,h_auto:breakpoints,q_auto,f_auto/v${img.version}/${img.display_name}.jpg`}
          alt={`Image ${img}`}
          width={img.width}
          height={img.height}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            opacity: opacity,
          }}
        />
      )}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-${justify} ${
          justify === "start" && "mt-24"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroImage;
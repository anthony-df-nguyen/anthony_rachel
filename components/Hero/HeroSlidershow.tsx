"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import { images } from "@/components/ImageGallery";
import "react-slideshow-image/dist/styles.css";

const HeroSlideshow = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false} autoplay infinite canSwipe indicators duration={2000}>
        {images.map((img, i) => (
          <div
            key={i}
            className="each-slide w-screen h-screen flex items-center justify-center relative"
          >
            <Image
              src={img.src}
              alt={`Image ${img}`}
              fill
              className="object-cover opacity-70" // Ensures image covers the entire container while maintaining aspect ratio
              quality={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default HeroSlideshow;
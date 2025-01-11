"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import { CldImage } from "next-cloudinary";
import { images } from "../Archive/CloudinaryGallery/constants";
import "react-slideshow-image/dist/styles.css";

const HeroSlideshow = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false} autoplay infinite canSwipe indicators>
        {images.map((img, i) => (
          <div key={i} className="each-slide lg:rounded-lg overflow-hidden">
            <CldImage
              src={`https://res.cloudinary.com/dyiydoztx/image/upload/w_300,q_auto,f_auto/v${img.version}/${img.display_name}.jpg`}
              alt={`Image ${img}`}
              width={img.width}
              height={img.height}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300"
              }`}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default HeroSlideshow;

"use client";
import React, { useEffect, useState, JSX } from "react";
import Image from "next/image";
import { images } from "../ImageGallery/constants";
import "react-slideshow-image/dist/styles.css";

/**
 * Props for the HeroImage component.
 * @property {number} landscapePhotoIndex - The index of the image to display in landscape mode.
 * @property {number} portraitPhotoIndex - The index of the image to display in portrait mode.
 * @property {number} breakpoint - The screen width (in pixels) to determine when to switch between landscape and portrait modes.
 * @property {React.ReactElement | React.ReactElement[]} [children] - Optional children elements to display on top of the image.
 * @property {number} opacity - The opacity of the background image (0 to 1).
 * @property {string} [justify="center"] - The alignment of the content inside the container. Accepts "start" or "center".
 */
type Props = {
  landscapePhotoIndex: number;
  portraitPhotoIndex: number;
  breakpoint: number;
  children?: React.ReactElement | React.ReactElement[];
  opacity: number;
  justify?: string;
};

/**
 * HeroImage component displays a full-screen responsive image that switches
 * between landscape and portrait images based on the screen width.
 * 
 * The component also accepts children elements to overlay on the image and
 * supports customizing opacity and alignment of the content.
 * 
 * @param {Props} props - The props for the HeroImage component.
 * @returns {JSX.Element} The rendered HeroImage component.
 */
const HeroImage = ({
  landscapePhotoIndex = 0,
  portraitPhotoIndex = 0,
  breakpoint = 780,
  children = <></>,
  opacity = 0.5,
  justify = "center",
}: Props): JSX.Element => {
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null); // Initial state is null
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  /**
   * Effect to handle screen resizing and update image orientation.
   */
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
      setIsLandscape(window.innerWidth > breakpoint);
    };

    // Set initial width and orientation
    setCurrentWidth(window.innerWidth);
    setIsLandscape(window.innerWidth > breakpoint);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  // Select the appropriate image based on orientation
  const img =
    isLandscape !== null
      ? images[isLandscape ? landscapePhotoIndex : portraitPhotoIndex]
      : images[portraitPhotoIndex]; // Fallback during initial render

  return (
    <div className="bg-black relative w-screen h-screen max-h-[100%] overflow-hidden">
      {isLandscape !== null && (
        <Image
          src={img.src}
          alt={`Image ${img}`}
          width={img.width}
          height={img.height}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            opacity: opacity,
          }}
          priority
        />
      )}
      <div
        className={`absolute inset-0 flex flex-col items-center ${
          (justify === "start" && !isLandscape) && "mt-[15vh] justify-start"
        } ${isLandscape && "justify-center"} ${justify === "center" && "justify-center"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroImage;
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Gallery } from "react-grid-gallery";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import CustomImageComponent from "./CustomImage";
import { images } from "./constants";

const MyImageGallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const isModalOpenRef = useRef(false);

  const handleClick = (index: number) => {
    setCurrentImage(index); // Open modal with clicked image
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setCurrentImage(null); // Close modal
    isModalOpenRef.current = false;
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const handleNext = () => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  const handlePrev = () => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpenRef.current) return;

      // Prevent default behavior
      if (["ArrowRight", "ArrowLeft", "Escape"].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "Escape":
          closeModal();
          break;
      }
    };

    // Add keydown listener
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        thumbnailImageComponent={(items) => CustomImageComponent(items)}
        onClick={(index) => handleClick(index)}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center ${
          currentImage === null ? "invisible" : "block"
        }`}
        onClick={closeModal}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl z-50"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Navigation Buttons */}
          {currentImage !== null && (
            <>
              <button
                className="absolute left-4 text-white text-3xl z-50 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 hidden md:block"
                onClick={handlePrev}
              >
                &#10094;
              </button>
              <div
                {...swipeHandlers}
                className="w-full h-full flex items-center justify-center p-4"
              >
                <Image
                  src={images[currentImage].src}
                  alt={`Image ${currentImage}`}
                  width={images[currentImage].width}
                  height={images[currentImage].height}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <button
                className="absolute right-4 text-white text-3xl z-50 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 hidden md:block"
                onClick={handleNext}
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyImageGallery;
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Gallery } from "@/components/ReactGridGallery";
import { useSwipeable } from "react-swipeable";
import { CldImage } from "next-cloudinary";
//import Image from "next/image";
import CustomImageComponent, {
  ExtendedThumbnailImageProps,
} from "./CustomImage";
import { images } from "./constants";

const MyImageGallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const isModalOpenRef = useRef(false);

  const handleClick = (index: number) => {
    setCurrentImage(index); // Open modal with clicked image
    setLoading(true); // Start loading indicator
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setCurrentImage(null); // Close modal
    setLoading(false); // Reset loading state
    isModalOpenRef.current = false;
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const handleNext = useCallback(() => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  },[])

  const handlePrev = useCallback(() => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
    }
  },[])

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
  }, [handleNext, handlePrev]);

  return (
    <div>
      <Gallery
        images={images.map((image) => ({
          ...image,
          src: image.secure_url || image.url, // Use secure_url or url as src
        }))}
        enableImageSelection={false}
        thumbnailImageComponent={(items) =>
          CustomImageComponent(items as ExtendedThumbnailImageProps)
        }
        onClick={(index) => handleClick(index)}
        rowHeight={200}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center ${
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
                {/* Loading Indicator */}
                {loading && (
                  <div className="absolute text-white">Loading...</div>
                )}
                {/* Cloudinary Image */}
                <CldImage
                  src={`https://res.cloudinary.com/dyiydoztx/image/upload/w_300,q_auto,f_auto/v${images[currentImage].version}/${images[currentImage].display_name}.jpg`}
                  alt={`Image ${currentImage}`}
                  width={images[currentImage].width}
                  height={images[currentImage].height}
                  onLoad={() => setLoading(false)} // Image loaded
                  onError={() => setLoading(false)} // Handle load errors
                  className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
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

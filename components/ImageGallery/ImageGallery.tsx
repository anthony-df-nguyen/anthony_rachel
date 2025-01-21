"use client";
import React, { useState, useEffect, useRef, useCallback, JSX } from "react";
import { Gallery } from "@/components/ReactGridGallery";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { CustomImage, images } from "@/components/ImageGallery";

/**
 * MyImageGallery component renders an interactive image gallery with responsive rowHeight.
 *
 * Features:
 * - Dynamic rowHeight based on screen width.
 * - Swipe, keyboard, and button navigation.
 * - Modal view for displaying images in full-screen mode.
 *
 * @returns {JSX.Element} The rendered MyImageGallery component.
 */
const MyImageGallery = (): JSX.Element => {
  const galleryImages = images.filter((row) => !row.hidden);
  const [currentImage, setCurrentImage] = useState<number | null>(null); // Stores the index of the currently active image
  const [rowHeight, setRowHeight] = useState<number>(120); // Stores the dynamic row height
  const isModalOpenRef = useRef(false); // Tracks whether the modal is open

  // Update rowHeight based on screen width
  useEffect(() => {
    const updateRowHeight = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setRowHeight(120); // For small screens
      } else if (screenWidth < 1200) {
        setRowHeight(200); // For medium screens
      } else {
        setRowHeight(300); // For large screens
      }
    };

    updateRowHeight(); // Initialize on mount
    window.addEventListener("resize", updateRowHeight);

    return () => {
      window.removeEventListener("resize", updateRowHeight);
    };
  }, []);

  const handleClick = (index: number) => {
    setCurrentImage(index);
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden"; // Disable page scrolling
  };

  const closeModal = () => {
    setCurrentImage(null);
    isModalOpenRef.current = false;
    document.body.style.overflow = ""; // Re-enable page scrolling
  };

  const handleNext = useCallback(() => {
    setCurrentImage((prev) =>
      prev !== null && prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
    );
  }, [galleryImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImage((prev) =>
      prev !== null && prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
    );
  }, [galleryImages.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpenRef.current) return;

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

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  return (
    <div>
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        thumbnailImageComponent={(items) => CustomImage(items)}
        onClick={(index) => handleClick(index)}
        rowHeight={rowHeight} // Use the dynamic rowHeight
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
            className="absolute top-4 right-4 text-white text-[3rem] z-50"
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
                className="w-full h-full flex items-center justify-center p-4 relative"
              >
                <Image
                  src={galleryImages[currentImage].src}
                  alt={`Image ${currentImage}`}
                  fill
                  className="max-w-full max-h-full object-contain"
                  quality={50}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
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
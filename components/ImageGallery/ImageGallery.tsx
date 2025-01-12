"use client";
import React, { useState, useEffect, useRef, useCallback, JSX } from "react";
import { Gallery } from "@/components/ReactGridGallery";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import {CustomImage, images} from "@/components/ImageGallery";

/**
 * MyImageGallery component renders an interactive image gallery with swipe, keyboard,
 * and button navigation. It also includes a modal view for displaying images in full-screen mode.
 *
 * Features:
 * - Clicking on a thumbnail opens the image in a modal.
 * - Modal navigation via arrows, swipe gestures, and keyboard shortcuts.
 * - Disables page scrolling while the modal is open.
 *
 * @returns {JSX.Element} The rendered MyImageGallery component.
 */
const MyImageGallery = (): JSX.Element => {
  const galleryImages = images.filter(row => !row.hidden)
  const [currentImage, setCurrentImage] = useState<number | null>(null); // Stores the index of the currently active image
  const isModalOpenRef = useRef(false); // Tracks whether the modal is open

  /**
   * Handles clicking on a gallery thumbnail to open the modal.
   * @param {number} index - The index of the clicked image.
   */
  const handleClick = (index: number) => {
    console.log("Handle Click detected");
    setCurrentImage(index);
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden"; // Disable page scrolling
  };

  /**
   * Closes the modal and resets the modal state.
   */
  const closeModal = () => {
    setCurrentImage(null);
    isModalOpenRef.current = false;
    document.body.style.overflow = ""; // Re-enable page scrolling
  };

  /**
   * Navigates to the next image in the gallery.
   */
  const handleNext = useCallback(() => {
    setCurrentImage((prev) =>
      prev !== null && prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    );
  }, [images.length]);

  /**
   * Navigates to the previous image in the gallery.
   */
  const handlePrev = useCallback(() => {
    setCurrentImage((prev) =>
      prev !== null && prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  }, [images.length]);

  /**
   * Configures swipe gestures for navigation using react-swipeable.
   */
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  /**
   * Adds keyboard navigation for modal interaction.
   * - ArrowRight: Go to the next image.
   * - ArrowLeft: Go to the previous image.
   * - Escape: Close the modal.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpenRef.current) return;

      // Prevent default browser behavior for certain keys
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
                className="w-full h-full flex items-center justify-center p-4 relative"
              >
                <Image
                  src={images[currentImage].src}
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
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import NextImage from "next/image";
import debounce from "lodash.debounce";
import { useSwipeable } from "react-swipeable";
import { Gallery } from "@/components/ReactGridGallery";
import { CustomImage, images } from "@/components/ImageGallery";

const galleryImages = images.filter((row) => !row.hidden);

const MyImageGallery = (): JSX.Element => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [rowHeight, setRowHeight] = useState<number>(120);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const isModalOpenRef = useRef(false);

  /**
   * Dynamically update thumbnail row height on screen resize
   */
  useEffect(() => {
    const updateRowHeight = () => {
      const width = window.innerWidth;
      if (width < 768) setRowHeight(120);
      else if (width < 1200) setRowHeight(200);
      else setRowHeight(300);
    };

    updateRowHeight();
    window.addEventListener("resize", updateRowHeight);
    return () => window.removeEventListener("resize", updateRowHeight);
  }, []);

  /**
   * Handle opening the modal for a selected image
   */
  const handleClick = (index: number) => {
    setCurrentImage(index);
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden";
  };

  /**
   * Close modal and unlock scroll
   */
  const closeModal = () => {
    setCurrentImage(null);
    isModalOpenRef.current = false;
    document.body.style.overflow = "";
  };

  /**
   * Debounced navigation to next image
   */
  const handleNext = useCallback(
    debounce(() => {
      setIsImageLoading(true);
      setCurrentImage((prev) =>
        prev !== null && prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }, 300),
    [galleryImages.length]
  );

  /**
   * Debounced navigation to previous image
   */
  const handlePrev = useCallback(
    debounce(() => {
      setIsImageLoading(true);
      setCurrentImage((prev) =>
        prev !== null && prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
      );
    }, 300),
    [galleryImages.length]
  );

  /**
   * Enable swipe gestures for mobile/desktop
   */
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  /**
   * Keyboard navigation for left/right arrows and ESC
   */
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
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  /**
   * Preload next and previous images to improve perceived speed
   */
  useEffect(() => {
    if (currentImage === null) return;

    const preload = (index: number) => {
      const img = new Image();
      img.src = galleryImages[index].src;
    };

    const nextIndex = currentImage === galleryImages.length - 1 ? 0 : currentImage + 1;
    const prevIndex = currentImage === 0 ? galleryImages.length - 1 : currentImage - 1;

    preload(nextIndex);
    preload(prevIndex);
  }, [currentImage]);

  return (
    <div>
      {/* Thumbnail Gallery */}
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        thumbnailImageComponent={(items) => CustomImage(items)}
        onClick={(index) => handleClick(index)}
        rowHeight={rowHeight}
      />

      {/* Fullscreen Modal */}
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

          {/* Navigation + Image Viewer */}
          {currentImage !== null && (
            <>
              {/* Prev Button */}
              <button
                className="absolute left-4 text-white text-3xl z-50 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 hidden md:block"
                onClick={handlePrev}
              >
                &#10094;
              </button>

              {/* Image Display with Loading Spinner */}
              <div
                {...swipeHandlers}
                className="w-full h-full flex items-center justify-center p-4 relative"
              >
                {isImageLoading && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                <NextImage
                  key={galleryImages[currentImage].src}
                  src={galleryImages[currentImage].src}
                  alt={`Image ${currentImage}`}
                  fill
                  className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                    isImageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  quality={75}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 1800px) 60vw, 100vw"
                  onLoadingComplete={() => setIsImageLoading(false)}
                />
              </div>

              {/* Next Button */}
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
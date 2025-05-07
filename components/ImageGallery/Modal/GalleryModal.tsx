import React, { useCallback, useEffect, useState } from "react";
import NextImage from "next/image";
import { SourceImage } from "../constants";
import debounce from "lodash.debounce";
import { useSwipeable } from "react-swipeable";

type Props = {
  currentIndex: number;
  images: SourceImage[];
  closeModal: () => void;
};

const GalleryModal = ({ currentIndex, images, closeModal }: Props) => {
  const [currentImage, setCurrentImage] = useState(currentIndex);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleNext = useCallback(
    debounce(() => {
      setIsImageLoading(true);
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 300),
    [images.length]
  );

  const handlePrev = useCallback(
    debounce(() => {
      setIsImageLoading(true);
      setCurrentImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }, 300),
    [images.length]
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  useEffect(() => {
    const preload = (index: number) => {
      const src = images[index].src;
      const width = Math.round(window.innerWidth * 0.7); // match your `sizes` logic
      const optimizedSrc = `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
    
      const img = new Image();
      img.src = optimizedSrc;
    };

    preload((currentImage + 1) % images.length);
    preload((currentImage - 1 + images.length) % images.length);
  }, [currentImage]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-[3rem] z-50"
          onClick={closeModal}
        >
          &times;
        </button>

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
          {isImageLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <NextImage
            key={images[currentImage].src}
            src={images[currentImage].src}
             placeholder="blur"
            blurDataURL={images[currentImage].blurDataURL}
            alt={`Image ${currentImage}`}
            fill
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            quality={75}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, (max-width: 1440px) 70vw, 60vw"
            onLoadingComplete={() => setIsImageLoading(false)}
          />
        </div>

        <button
          className="absolute right-4 text-white text-3xl z-50 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 hidden md:block"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { images } from "./constants";
import ThumbnailGrid from "./Thumbnails/ThumbnailGrid";
import GalleryModal from "./Modal/GalleryModal";

const MyImageGallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const isModalOpenRef = useRef(false);

  const handleClick = (index: number) => {
    setCurrentImage(index);
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setCurrentImage(null);
    isModalOpenRef.current = false;
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (currentImage !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [currentImage]);

  return (
    <div>
      <ThumbnailGrid images={images} onClick={handleClick} />
      {currentImage !== null && (
        <GalleryModal
          currentIndex={currentImage}
          images={images}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MyImageGallery;

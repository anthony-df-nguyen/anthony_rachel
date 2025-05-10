"use client";
import React, { useState, useRef, useEffect } from "react";
import { images } from "data/images/gallery";
import ThumbnailGrid from "./Thumbnails/ThumbnailGrid";
import GalleryModal from "./Modal/GalleryModal";

const MyImageGallery = () => {
  const [currentImageKey, setCurrentImageKey] = useState<string | null>(null);
  const isModalOpenRef = useRef(false);

  const handleClick = (key: string) => {
    setCurrentImageKey(key);
    isModalOpenRef.current = true;
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setCurrentImageKey(null);
    isModalOpenRef.current = false;
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (currentImageKey !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [currentImageKey]);

  return (
    <div>
      <ThumbnailGrid images={images} onClick={handleClick} />
      {currentImageKey !== null && (
        <GalleryModal
          currentKey={currentImageKey}
          images={images}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MyImageGallery;
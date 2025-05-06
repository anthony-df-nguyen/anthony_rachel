"use client";
import { useEffect, useRef, useState } from "react";

const PicflowEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    // Load the Picflow embed script once
    if (!window.picflow) {
      window.picflow = true;
      const script = document.createElement("script");
      script.src = "https://picflow.com/embed/main.js";
      script.type = "module";
      script.defer = true;
      document.head.appendChild(script);
    }

    // Observe for content injected into <picflow-gallery>
    const observer = new MutationObserver(() => {
      if (galleryRef.current && galleryRef.current.children.length > 0) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    // Wait until the gallery element is available before observing
    const interval = setInterval(() => {
      if (galleryRef.current) {
        observer.observe(galleryRef.current, { childList: true });
        clearInterval(interval);
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      {!isLoaded && (
        <div className="flex flex-col gap-4">
          <div className="relative inset-0 flex items-center justify-center z-10 bg-white">
            <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
          </div>
          <div className="text-center">Loading photo gallery...</div>
        </div>
      )}

      {/* Picflow Embed Element */}
      <picflow-gallery
        ref={galleryRef}
        id="gal_Bq3oAPTTXt3VL3SN"
        tenant="tnt_NFJ5pEpLlywWogTa"
        lightbox="#000000E6"
        no-padding="true"
      ></picflow-gallery>
    </div>
  );
};

export default PicflowEmbed;

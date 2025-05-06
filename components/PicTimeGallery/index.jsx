"use client"
import { useEffect } from "react";

const PicflowEmbed = () => {
  useEffect(() => {
    if (!window.picflow) {
      window.picflow = true;
      const script = document.createElement("script");
      script.src = "https://picflow.com/embed/main.js";
      script.type = "module";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-full">
      {/* This renders the actual gallery element */}
      <picflow-gallery
        id="gal_Bq3oAPTTXt3VL3SN"
        tenant="tnt_NFJ5pEpLlywWogTa"
        lightbox="#000000E6"
        no-padding="true"
      ></picflow-gallery>
    </div>
  );
};

export default PicflowEmbed;
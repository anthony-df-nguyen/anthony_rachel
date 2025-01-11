"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "./Archive/CloudinaryGallery/constants";

type Props = {
  img: CloudinaryImage;
};

const SingleImage = ({ img }: Props) => {
  return (
    <CldImage
      src={`https://res.cloudinary.com/dyiydoztx/image/upload/c_fill,w_auto:breakpoints,h_auto:breakpoints,q_auto,f_auto/v${img.version}/${img.display_name}.jpg`}
      alt={`Image`}
      width={img.width}
      height={img.height}
      className="w-full h-full object-cover relative  rounded-lg bg-gray-900  shadow-2xl"
    />
  );
};

export default SingleImage;

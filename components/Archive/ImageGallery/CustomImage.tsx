import React from "react";
import { ThumbnailImageProps } from "@/components/ReactGridGallery";
//import { CldImage } from "next-cloudinary";
import Image from "next/image";

const CustomImage = (props: ThumbnailImageProps) => {
  return (
    <Image
      alt=""
      src={props.item.src}
      width={200}
      height={200}
      quality={30}
    />
  );
};

export default CustomImage;

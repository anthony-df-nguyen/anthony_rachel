import React, {JSX} from "react";
import { ThumbnailImageProps } from "@/components/ReactGridGallery";
import Image from "next/image";

/**
 * CustomImage component to render an image with specified dimensions and styling.
 * This component uses Next.js Image for optimized rendering.
 *
 * @param {ThumbnailImageProps} props - The properties required for the image.
 * @param {object} props.item - Contains information about the image.
 * @param {string} props.item.src - The source URL of the image.
 * @param {number} props.item.scaledWidth - The scaled width of the image.
 * @param {number} props.item.scaledHeight - The scaled height of the image.
 * @returns {JSX.Element} The rendered image wrapped in a styled div container.
 */
const CustomImage = (props: ThumbnailImageProps): JSX.Element => {
  return (
    <div
      style={{
        width: props.item.scaledWidth,
        height: props.item.scaledHeight,
        position: "relative",
      }}
    >
      <Image
        alt=""
        src={props.item.src}
        quality={20}
        fill
        sizes="300px"
      />
    </div>
  );
};

export default CustomImage;
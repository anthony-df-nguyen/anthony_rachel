// @ts-nocheck
"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { SourceImage } from "data/images/gallery";

type Props = {
  /**
   * Index of the image to display from the `images` array.
   */
  image: SourceImage;
  /**
   * Orientation of the image relative to the text content.
   * Accepts "left", "right", "top", or "bottom".
   */
  orientation: "left" | "right" | "top" | "bottom";
  /**
   * Content to display alongside the image.
   */
  children: React.ReactNode;
  /**
   * Optional class names to apply custom height styles to the image container.
   */
  imageHeightClass?: string;
};

/**
 * ImageContent component renders an image alongside text content.
 *
 * Features:
 * - Dynamically positions the image relative to the text based on the `orientation` prop.
 * - Supports custom height styles for the image container through the `imageHeightClass` prop.
 * - Uses Next.js Image for optimized image rendering.
 *
 * @param {Props} props - Component properties.
 * @param {number} props.image - The index of the image to display.
 * @param {"left" | "right" | "top" | "bottom"} props.orientation - Orientation of the image relative to the text.
 * @param {React.ReactNode} props.children - Content to display alongside the image.
 * @param {string} [props.imageHeightClass] - Optional custom height class for the image container.
 * @returns {JSX.Element} The rendered ImageContent component.
 */
export default function ImageContent({
  image,
  orientation,
  children,
  imageHeightClass,
}: Props): JSX.Element {

  return (
    <div className="bg-white">
      <div
        className={`mx-auto grid gap-8 sm:gap-24 lg:mx-0 lg:max-w-none ${
          orientation === "left" || orientation === "right"
            ? "lg:grid-cols-2"
            : "lg:grid-cols-1"
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-lg bg-gray-900 px-6 shadow-2xl sm:px-12 lg:px-8 xl:px-10
              ${imageHeightClass}
              ${
                (orientation === "left" || orientation === "top") &&
                "lg:order-0"
              } ${
            (orientation === "right" || orientation === "bottom") &&
            "lg:order-1"
          }`}
        >
          <Image
            src={image.src}
            alt={`Image ${image}`}
            width={image.width}
            height={image.height}
            quality={50}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
          />
        </div>
        {/* Text */}
        <div className="text-base/7 text-gray-700 flex items-center mx-auto">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}

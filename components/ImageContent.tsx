"use client";
import { CldImage } from "next-cloudinary";
import { images } from "./CloudinaryGallery/constants";

type Props = {
  image: number;
  orientation: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  imageHeightClass?: string;
};

export default function ImageContent({
  image,
  orientation,
  children,
  imageHeightClass,
}: Props) {
  const img = images[image];

  // Determine layout classes based on orientation

  return (
    <div className="bg-white">
      <div className="px-6 lg:px-8">
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
            <CldImage
              src={`https://res.cloudinary.com/dyiydoztx/image/upload/c_fill,w_auto:breakpoints,h_auto:breakpoints,q_auto,f_auto/v${img.version}/${img.display_name}.jpg`}
              alt={`Image ${img}`}
              width={img.width}
              height={img.height}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
            />
          </div>
          {/* Text */}
          <div className="text-base/7 text-gray-700 flex items-center">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

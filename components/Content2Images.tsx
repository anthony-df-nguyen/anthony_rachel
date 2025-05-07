import Image from "next/image";
import { SourceImage } from "data/images/types";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  image_1: SourceImage;
  image_2?: SourceImage;
  orientation: "left" | "right";
};

export default function Content2Images({
  title,
  children,
  image_1,
  image_2,
  orientation,
}: Props) {
  const isSingleImage = !image_2;
  const gridCols = isSingleImage ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const textColSpan = "lg:col-span-2";
  const imageColSpan = isSingleImage ? "lg:col-span-1" : "lg:col-span-2";
  const imageGridCols = isSingleImage ? "grid-cols-1" : "grid-cols-2";

  return (
    <div className="my-12 lg:my-32 overflow-hidden bg-white">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <section className={`grid grid-cols-1 ${gridCols} gap-8 lg:gap-16`}>
          {/* Text Block */}
          <div
            className={`
              order-1
              ${orientation === "left" ? "lg:order-1" : "lg:order-2"}
              ${textColSpan}
            `}
          >
            <div className="titles text-3xl text-left pb-6 border-b-[1px]">
              {title}
            </div>
            <br />
            <div>{children}</div>
          </div>

          {/* Image Block */}
          <div
            className={`
              order-2
              ${orientation === "left" ? "lg:order-2" : "lg:order-1"}
              ${imageColSpan}
              grid ${imageGridCols} gap-4
            `}
          >
            {/* First Image */}
            <div
              className={`relative aspect-square overflow-hidden rounded-xl  shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                !isSingleImage && orientation === "left" ? "lg:mt-12" : ""
              }`}
            >
              <Image
                src={image_1.src}
                alt="Image 1"
                width={image_1.width}
                height={image_1.height}
                quality={50}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Second Image */}
            {image_2 && (
              <div
                className={`relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                  orientation === "right" ? "lg:mt-12" : ""
                }`}
              >
                <Image
                  src={image_2.src}
                  alt="Image 2"
                  width={image_2.width}
                  height={image_2.height}
                  quality={50}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
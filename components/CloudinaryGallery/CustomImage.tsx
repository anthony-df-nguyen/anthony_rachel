"use client";
import { CldImage } from "next-cloudinary";
import { ThumbnailImageProps, ImageExtended, Image } from "@/components/ReactGridGallery";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export type ExtendedImage = ImageExtended<Image> & {
  version: string;
  public_id: string;
  scaledHeight: number;
  viewportWidth: number;
};
export type ExtendedThumbnailImageProps = Omit<ThumbnailImageProps, "item"> & {
  item: ExtendedImage;
};

export default function Page(props: ExtendedThumbnailImageProps) {
  return (
    <CldImage
      src={`https://res.cloudinary.com/dyiydoztx/image/upload/t_Thumbnail/v${props.item.version}/${props.item.public_id}.jpg`} // Use this sample image or upload your own via the Media Explorer
      alt=""
      height={props.item.scaledHeight}
      width={props.item.viewportWidth}
      crop={{
        type: "auto",
      }}
    />
  );
}

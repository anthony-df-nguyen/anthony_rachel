import React from "react";
import Masonry from "react-masonry-css";
import NextImage from "next/image";
import { SourceImage } from "data/images/types";
import styles from "./ThumbnailGrid.module.scss"; // for scoped styles
import { ClassNames } from "@emotion/react";

type Props = {
  images: Record<string, SourceImage>;
  onClick: (key: string) => void;
};

const breakpointColumnsObj = {
  default: 4,
  1440: 3,
  1024: 2,
  640: 2,
};

const ThumbnailGrid = ({ images, onClick }: Props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {Object.entries(images).map(([key, item]) => (
        <div key={key} style={{ marginBottom: "16px" }} className="">
          <NextImage
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            loading="lazy"
            quality={20}
            placeholder="blur"
            blurDataURL={item.blurDataURL}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1440px) 30vw, 25vw"
            onClick={() => onClick(key)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default ThumbnailGrid;

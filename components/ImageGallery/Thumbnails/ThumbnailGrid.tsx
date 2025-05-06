import React from "react";
import Masonry from "react-masonry-css";
import NextImage from "next/image";
import styles from "./ThumbnailGrid.module.scss"; // for scoped styles

type Props = {
  images: { src: string; height: number; width: number }[];
  onClick: (index: number) => void;
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
      {images.map((item, index) => (
        <div key={item.src} style={{ marginBottom: "16px" }}>
          <NextImage
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            loading="lazy"
            quality={20}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1440px) 30vw, 25vw"
            onClick={() => onClick(index)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default ThumbnailGrid;

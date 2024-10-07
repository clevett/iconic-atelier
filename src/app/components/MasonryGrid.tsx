"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./MasonryGrid.module.scss";
import { Gallery } from "@/app/resources";

export default function MasonryGrid({ images }: { images: Gallery["images"] }) {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image, index) => (
        <SmartImage
          alt={image.alt}
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
          className={styles.gridItem}
          key={index}
          radius="m"
          src={image.src}
          enlarge={true}
        />
      ))}
    </Masonry>
  );
}

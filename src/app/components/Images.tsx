"use client";

import { Flex, SmartImage } from "@/once-ui/components";
import styles from "./Images.module.scss";
import { Gallery } from "@/app/resources";

export default function Images({ images }: { images: Gallery["images"] }) {
  return (
    <Flex className={styles.images}>
      {images.map((image, index) => (
        <SmartImage
          alt={image.alt}
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
          className={styles.card}
          enlarge={true}
          key={`${image.id}-${index}`}
          priority={index < 8}
          radius="m"
          sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, 33vw"
          src={image.src}
        />
      ))}
    </Flex>
  );
}

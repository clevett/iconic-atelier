import { Image } from "@/app/resources";
import {
  Flex,
  Grid,
  Heading,
  RevealFx,
  SmartImage,
  Text,
} from "@/once-ui/components";

import styles from "./Paintings.module.scss";

export const Painting = ({
  image,
  isPriority,
}: {
  image: Image;
  isPriority: boolean;
}) => {
  const { description, title } = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    title: "Lorem Ipsum",
  };

  return (
    <Grid className={styles.panel}>
      <div className={styles.image}>
        <SmartImage
          alt={image.alt}
          enlarge={false}
          priority={isPriority}
          radius="m"
          src={image.src}
        />
      </div>

      <Grid className={styles.description}>
        <Heading wrap="balance">{title}</Heading>
        <Text
          onBackground="neutral-weak"
          variant="body-default-l"
          wrap="balance"
        >
          {description}
        </Text>
      </Grid>
    </Grid>
  );
};

export const Paintings = ({ images }: { images: Image[] }) => {
  return (
    <Flex className={styles.images}>
      {images.map((image, index) => (
        <Painting image={image} key={image.id} isPriority={index < 4} />
      ))}
    </Flex>
  );
};

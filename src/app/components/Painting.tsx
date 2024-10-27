import { Image } from "@/app/resources";
import { Grid, Heading, SmartImage, Text } from "@/once-ui/components";

import styles from "./Painting.module.scss";

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
    title: "Woman on Fire",
  };

  return (
    <Grid className={styles.panel}>
      <div className={styles.image}>
        <SmartImage
          alt={image.alt}
          enlarge={false}
          priority={isPriority}
          radius="m"
          // sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, 33vw"
          src={image.src}
        />
      </div>

      <Grid className={styles.description}>
        <Heading wrap="balance" variant="display-strong-l">
          {title}
        </Heading>
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

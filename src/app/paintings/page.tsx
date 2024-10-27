import { Flex, Grid } from "@/once-ui/components";
import { Painting } from "@/app/components";
import { baseURL, paintings } from "@/app/resources";
import { Metadata } from "next";

import styles from "./styles.module.scss";

const { title, description, label } = paintings;
const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `https://${baseURL}/${label.toLowerCase()}`,
    images: [
      {
        url: ogImage,
        alt: title,
      },
    ],
  },
};

export default function Paintings() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: paintings.title,
            description: paintings.description,
            url: `https://${baseURL}/paintings`,
            image: paintings.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
          }),
        }}
      />
      <Grid className={styles.gallery}>
        {paintings.images.map((image, index) => (
          <Painting image={image} key={image.id} isPriority={index < 4} />
        ))}
      </Grid>
    </Flex>
  );
}

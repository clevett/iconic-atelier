import { Flex } from "@/once-ui/components";
import Images from "@/app/components/Images";
import { baseURL, tattoos, home } from "@/app/resources";

import { Metadata } from "next";

const { title, description, label } = tattoos;
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function Tattoos() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: tattoos.title,
            description: tattoos.description,
            url: `https://${baseURL}/tattoos`,
            image: tattoos.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: home.title,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}/icon.ico`,
              },
            },
          }),
        }}
      />
      <Images images={tattoos.images} />
    </Flex>
  );
}

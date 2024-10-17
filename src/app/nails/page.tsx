import { Flex } from "@/once-ui/components";
import Images from "@/app/components/Images";
import { baseURL, nails } from "@/app/resources";

import { Metadata } from "next";

const { title, description, label } = nails;
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
export default function Nails() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: nails.title,
            description: nails.description,
            url: `https://${baseURL}/nails`,
            image: nails.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
          }),
        }}
      />
      <Images images={nails.images} />
    </Flex>
  );
}

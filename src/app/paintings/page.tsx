import { Flex } from "@/once-ui/components";
import Images from "@/app/components/Images";
import { baseURL, paintings } from "@/app/resources";
import { Metadata } from "next";

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
      <Images images={paintings.images} />
    </Flex>
  );
}

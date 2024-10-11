import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/app/components/MasonryGrid";
import { baseURL, nails } from "@/app/resources";

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
      <MasonryGrid images={nails.images} />
    </Flex>
  );
}

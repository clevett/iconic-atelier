import { Flex } from "@/once-ui/components";
import MasonryGrid from "../components/MasonryGrid";
import { baseURL, paintings, person } from "../resources";

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
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={paintings.images} />
    </Flex>
  );
}

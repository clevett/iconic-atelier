import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/app/components/MasonryGrid";
import { baseURL, tattoos, home } from "@/app/resources";

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
                url: `${baseURL}/favicon.ico`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={tattoos.images} />
    </Flex>
  );
}

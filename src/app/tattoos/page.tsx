import { Flex, RevealFx } from "@/once-ui/components";
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
    <RevealFx translateY="4" style={{ width: "100%" }}>
      <Flex fillWidth direction="column">
        <Images images={tattoos.images} />
      </Flex>
    </RevealFx>
  );
}

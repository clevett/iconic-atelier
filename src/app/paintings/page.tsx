import { Flex, RevealFx } from "@/once-ui/components";
import { Paintings } from "@/app/components";
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

export default function Page() {
  return (
    <RevealFx translateY="4" style={{ width: "100%" }}>
      <Flex fillWidth direction="column">
        <Paintings images={paintings.images} />
      </Flex>
    </RevealFx>
  );
}

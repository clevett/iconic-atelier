import React, { Suspense } from "react";

import {
  Heading,
  Flex,
  Text,
  RevealFx,
  SmartImage,
} from "@/once-ui/components";

import { baseURL, home } from "@/app/resources";
import { Socials } from "@/app/components";

import type { Metadata } from "next";

const { title, description, label } = home;
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

export default function Home() {
  return (
    <Flex
      alignItems="center"
      direction="column"
      fillWidth
      gap="xl"
      maxWidth="m"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            description: home.description,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            name: home.title,
            url: `https://${baseURL}`,
            publisher: {
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
      <Flex fillWidth direction="column" paddingY="l" gap="l">
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.15}>
            <Text
              onBackground="neutral-weak"
              variant="body-default-l"
              wrap="balance"
            >
              {home.subline}
            </Text>
          </RevealFx>
        </Flex>
        <RevealFx translateY="12" delay={0.2}>
          <Socials />
        </RevealFx>
        <RevealFx translateY="16" delay={0.25}>
          <SmartImage
            alt="Iconic Atelier is modern and stylish art studio"
            aspectRatio="16 / 9"
            priority={true}
            radius="m"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/paintings/image (21).jpg"
          />
        </RevealFx>
      </Flex>
    </Flex>
  );
}

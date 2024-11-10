import React from "react";

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

import styles from "./styles.module.scss";

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
        <Flex
          direction="column"
          alignItems="center"
          fillWidth
          maxWidth="s"
          gap="m"
          style={{
            alignSelf: "center",
          }}
        >
          <RevealFx translateY="4">
            <span className={` ${styles.textShadow}`}>
              <Heading wrap="balance" variant="display-strong-l">
                <span>
                  Iconic <br />
                  <span
                    style={{
                      fontSize:
                        "calc(var(--font-size-display-ml) * var(--font-size-heading-multiplier))",
                    }}
                  >
                    Atelier
                    <span style={{ color: "#d20306" }}>.</span>
                  </span>
                </span>
              </Heading>
            </span>
          </RevealFx>
          <RevealFx translateY="8">
            <Text
              onBackground="neutral-weak"
              variant="body-default-l"
              wrap="balance"
            >
              {home.subline}
            </Text>
          </RevealFx>
        </Flex>

        <RevealFx translateY="12">
          <Flex show="s">
            <Socials />
          </Flex>
        </RevealFx>

        <RevealFx translateY="16">
          <SmartImage
            alt="Iconic Atelier is modern and stylish art / tattoo studio"
            aspectRatio="16 / 9"
            priority={true}
            radius="m"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/paintings/image (21).jpg"
            style={{
              boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
            }}
          />
        </RevealFx>
      </Flex>
    </Flex>
  );
}

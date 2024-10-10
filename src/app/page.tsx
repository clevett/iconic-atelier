import React from "react";

import { Heading, Flex, Text, RevealFx } from "@/once-ui/components";

import { baseURL, home, person } from "@/app/resources";
import { Contact } from "./components";
import { Socials } from "./components/Socials";

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
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
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
          <RevealFx translateY="8" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {home.address}
            </Text>
          </RevealFx>
        </Flex>
        <RevealFx translateY="12" delay={0.5}>
          <Socials />
        </RevealFx>
        <RevealFx translateY="12" delay={0.6}>
          <Contact />
        </RevealFx>
      </Flex>
    </Flex>
  );
}

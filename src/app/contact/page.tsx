import React from "react";

import {
  Heading,
  Flex,
  Text,
  RevealFx,
  IconButton,
} from "@/once-ui/components";

import { baseURL, contact, home, social } from "@/app/resources";
import { Contact } from "@/app/components";

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
            description: contact.description,
            image: `${baseURL}/og?title=${encodeURIComponent(contact.title)}`,
            name: contact.title,
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
              {contact.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {contact.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {contact.address}
            </Text>
          </RevealFx>
        </Flex>
        <RevealFx translateY="12" delay={0.35}>
          <Flex gap="16">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              Message us on social media!
            </Text>
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    href={item.dm}
                    icon={item.icon}
                    key={item.name}
                    size="s"
                    tooltip={item.name}
                    variant="ghost"
                  />
                )
            )}
          </Flex>
        </RevealFx>
        <RevealFx translateY="12" delay={0.6}>
          <Contact />
        </RevealFx>
      </Flex>
    </Flex>
  );
}

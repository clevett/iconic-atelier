import React from "react";

import { Heading, Flex, Text, RevealFx } from "@/once-ui/components";

import { baseURL, home, person } from "@/app/resources";

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
      <Flex fillWidth direction="column" paddingY="l" gap="m">
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
        </Flex>
        <Flex fillWidth direction="column" gap="m">
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
      </Flex>
      {/* {routes["/news"] && (
        <Flex fillWidth paddingX="20">
          <Posts range={[1, 2]} columns="2" />
        </Flex>
      )}
      {newsletter.display && <Mailchimp />} */}
    </Flex>
  );
}

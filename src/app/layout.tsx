import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Analytics } from "@vercel/analytics/react";
import { Flex, Background } from "@/once-ui/components";
import { Footer, Header } from "@/app/components";
import { baseURL, effects, home, style } from "@/app/resources";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://" + baseURL),
  title: home.title,
  description: home.description,
  openGraph: {
    title: home.title,
    description: "Portfolio website showcasing my work.",
    url: baseURL,
    siteName: home.title,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
    >
      <Analytics />
      <Flex
        style={{ minHeight: "100vh" }}
        as="body"
        fillWidth
        margin="0"
        padding="0"
        direction="column"
      >
        <Background
          gradient={effects.gradient}
          dots={effects.dots}
          lines={effects.lines}
          style={{
            background:
              "radial-gradient(100% 100% at 49.99% 0%, var(--static-transparent) 0%, var(--page-background) 100%), radial-gradient(87.4% 84.04% at 6.82% 16.24%, var(--brand-background-medium) 0%, var(--static-transparent) 100%), radial-gradient(217.89% 126.62% at 48.04% 0%, #6a6a6a 0%, var(--static-transparent) 100%)",
          }}
        />
        <Flex fillWidth minHeight="16"></Flex>
        <Header />
        <Flex
          zIndex={0}
          fillWidth
          paddingY="l"
          paddingX="l"
          justifyContent="center"
          flex={1}
        >
          <Flex justifyContent="center" fillWidth minHeight="0">
            <>{children}</>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}

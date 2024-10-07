import { Flex, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/app/components";
import { Posts } from "@/app/news/components/Posts";

import { news, newsletter, person } from "@/app/resources";
import { baseURL, mailchimp } from "@/app/resources";

export function generateMetadata() {
  const title = news.title;
  const description = news.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/news`,
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
}

export default function News() {
  return (
    <Flex fillWidth maxWidth="s" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "news",
            headline: news.title,
            description: news.description,
            url: `https://${baseURL}/news`,
            image: `${baseURL}/og?title=${encodeURIComponent(news.title)}`,
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
      <Heading marginBottom="l" variant="display-strong-s">
        {news.title}
      </Heading>
      <Flex fillWidth flex={1}>
        <Posts range={[1, 3]} />
        <Posts range={[4]} columns="2" />
      </Flex>
      {newsletter.display && <Mailchimp />}
    </Flex>
  );
}

import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getPosts } from "@/app/utils";
import { Avatar, Button, Flex, Heading, Text } from "@/once-ui/components";

import { person, baseURL } from "@/app/resources";

interface newsParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  let posts = getPosts(["src", "app", "news", "posts"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: newsParams) {
  let post = getPosts(["src", "app", "news", "posts"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/news/${post.slug}`,
      images: [
        {
          url: ogImage,
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

export default function news({ params }: newsParams) {
  let post = getPosts(["src", "app", "news", "posts"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <Flex as="section" fillWidth maxWidth="xs" direction="column" gap="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "newsPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/news/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Button href="/news" variant="tertiary" size="s" prefixIcon="chevronLeft">
        Posts
      </Button>
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Flex gap="12" alignItems="center">
        {person.avatar && <Avatar size="s" src={person.avatar} />}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {formatDate(post.metadata.publishedAt)}
        </Text>
      </Flex>
      <Flex as="article" direction="column" fillWidth>
        <CustomMDX source={post.content} />
      </Flex>
    </Flex>
  );
}

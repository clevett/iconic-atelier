import { getPosts } from "@/app/utils";
import { baseURL } from "@/app/resources";

export default async function sitemap() {
  let news = getPosts(["src", "app", "news", "posts"]).map((post) => ({
    url: `${baseURL}/news/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let works = getPosts(["src", "app", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/news"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...news, ...works];
}

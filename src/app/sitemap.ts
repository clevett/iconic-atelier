import { baseURL } from "@/app/resources";

export default async function sitemap() {
  let routes = ["", "/tattoos", "/nails", "/paintings"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

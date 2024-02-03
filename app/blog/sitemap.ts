import { MetadataRoute } from "next";
import { getAllBlogData } from "../lib/posts";
import { BASE_URL } from "../lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = getAllBlogData();
  return blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog.data.date ?? new Date(),
  }));
}

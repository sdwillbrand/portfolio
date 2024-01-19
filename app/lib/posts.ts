import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Blog } from "../typings/Blog";

const blogDirectory = path.join(process.cwd(), "content");

export function getAllBlogData() {
  const fileNames = readdirSync(blogDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
    ...matter(readFileSync(path.join(blogDirectory, fileName), "utf8")),
  }));
}

export async function getBlogData(slug: string): Promise<Blog> {
  const blogs = getAllBlogData();
  const blog = blogs.find((blog) => blog.slug === slug);

  const processedContent = await remark().use(html).process(blog?.content);
  const content = processedContent.toString();

  return {
    title: blog?.data?.title,
    content,
  };
}

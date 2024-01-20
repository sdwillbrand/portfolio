import path from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";
import { Blog, GreyMatterBlog } from "../typings/Blog";

const blogDirectory = path.join(process.cwd(), "content");

export function getAllBlogData(): GreyMatterBlog[] {
  const fileNames = readdirSync(blogDirectory);

  return fileNames.map((fileName) => {
    const matterBlog = matter(
      readFileSync(path.join(blogDirectory, fileName), "utf8")
    );
    return {
      slug: fileName.replace(/\.md$/, ""),
      ...matterBlog,
      data: {
        ...matterBlog.data,
        date: matterBlog.data.date && new Date(matterBlog.data.date),
      },
    };
  });
}

export function getBlogData(slug: string): GreyMatterBlog {
  const blogs = getAllBlogData();
  const blog = blogs.find((blog) => blog.slug === slug)!;
  return blog;
}

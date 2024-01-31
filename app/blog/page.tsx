import Script from "next/script";
import { getAllBlogData } from "../lib/posts";
import BlogPreview from "./BlogPreview";

const Blog = () => {
  const blogs = getAllBlogData();
  return (
    <main className="flex items-center flex-col gap-5">
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} blog={blog} />
      ))}
      <Script src="/prism.js" />
    </main>
  );
};

export default Blog;

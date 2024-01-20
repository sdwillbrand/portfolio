import { getAllBlogData } from "../lib/posts";
import BlogPreview from "./BlogPreview";

const Blog = () => {
  const blogs = getAllBlogData();
  return (
    <main className="flex items-center flex-col mt-10 gap-5">
      <h1 className="text-3xl">Blog</h1>
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} blog={blog} />
      ))}
    </main>
  );
};

export default Blog;

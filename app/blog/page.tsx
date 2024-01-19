import { getAllBlogData } from "../lib/posts";

const Blog = () => {
  const blogs = getAllBlogData();
  return (
    <main>
      <ul>
        {blogs.map((blog, key) => (
          <li key={key}>{blog.data.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;

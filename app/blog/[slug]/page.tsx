import { getAllBlogData, getBlogData } from "@/app/lib/posts";

export const dynamicParams = false;

interface Props {
  params: { slug: string };
}

const Page = async ({ params }: Props) => {
  const blog = await getBlogData(params.slug);
  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};

export function generateStaticParams() {
  const blogs = getAllBlogData();
  return blogs;
}

export default Page;

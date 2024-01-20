import { getAllBlogData, getBlogData } from "@/app/lib/posts";
import Image from "next/image";
import Markdown from "react-markdown";
import "./styles.css";
import Head from "next/head";
interface Props {
  params: { slug: string };
}

const Page = ({ params }: Props) => {
  const {
    data: { imageUrl, title },
    content,
  } = getBlogData(params.slug);
  return (
    <div className="flex place-content-center items-center w-screen flex-col gap-5 md:px-24">
      {imageUrl && (
        <Image
          className="max-w-full object-cover h-auto"
          src={imageUrl}
          width={600}
          height={150}
          alt={title!}
          priority
        />
      )}
      <article className="mb-5">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};

export function generateStaticParams() {
  const blogs = getAllBlogData();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default Page;

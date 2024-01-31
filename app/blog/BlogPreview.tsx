"use client";
import Image from "next/image";
import { GreyMatterBlog } from "../typings/Blog";
import Link from "next/link";

interface Props {
  blog: GreyMatterBlog;
}

const BlogPreview = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="border rounded-lg pb-4 border-indigo-700 cursor-pointer hover:scale-95 hover:bg-[rgba(255,255,255,0.1)] transition-all group max-w-md md:max-w-lg w-[70vw]">
        {blog.data.imageUrl && (
          <Image
            className="rounded-t-lg w-full"
            src={blog.data.imageUrl}
            width={400}
            height={150}
            alt={blog.data.title ?? ""}
          />
        )}
        <div className="pt-5 px-5 group-hover:-translate-y-1 transition-all">
          {blog.data.date && (
            <div className="text-sm text-gray-500">
              {blog.data.date.toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          )}
          {blog.data.description && <div>{blog.data.description}</div>}
        </div>
      </div>
    </Link>
  );
};

export default BlogPreview;

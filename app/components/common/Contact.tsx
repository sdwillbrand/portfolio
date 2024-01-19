"use client";
import Link from "next/link";
import { HTMLProps } from "react";
import { MdAlternateEmail } from "react-icons/md";

const Contact = ({ className }: HTMLProps<HTMLDivElement>) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("so.willbrand@gmail.com");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`${className} bg-gradient-to-bl to-sky-600 from-indigo-900 flex md:flex-col md:gap-5 items-center justify-around`}
    >
      <div>
        <p className="text-2xl">Contact me</p>
        <p className="pt-2 text-sm text-gray-200">Make a contact via email.</p>
      </div>
      <Link
        href="mailto:so.willbrand@gmail.com"
        onClick={handleCopy}
        className="border rounded-md p-4 border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition"
      >
        <MdAlternateEmail size={30} />
      </Link>
    </div>
  );
};
export default Contact;

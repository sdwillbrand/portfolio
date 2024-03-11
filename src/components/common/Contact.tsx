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
    <Link
      href="mailto:so.willbrand@gmail.com"
      onClick={handleCopy}
      className={`${className} flex cursor-pointer items-center gap-2 self-end rounded-3xl from-transparent to-amber-400 p-4 transition-colors duration-200 hover:bg-gradient-to-r`}
    >
      <MdAlternateEmail size={15} /> Projekt anfragen
    </Link>
  );
};
export default Contact;

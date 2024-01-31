"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 py-10 flex w-full bg-[rgba(0,0,0,0.8)]">
      <div className="flex gap-5 w-full z-10 place-content-center">
        <Link href="/" className="text-xl text-gray-500">
          Home
        </Link>
        <Link href="/blog" className="text-xl text-gray-500">
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;

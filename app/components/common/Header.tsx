"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative py-10 flex">
      <div className="flex gap-5 w-full z-10">
        <Link href="/" className="text-xl text-gray-500">
          Home
        </Link>
        {document !== undefined && !document.baseURI.includes("/blog") && (
          <Link href="/blog" className="text-xl text-gray-500">
            Blog
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

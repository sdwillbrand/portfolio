"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 flex w-full border py-8">
      <div className="z-10 flex w-full place-content-center gap-5">
        <Link href="/" className="text-xl text-gray-600">
          Home
        </Link>
        <Link href="/about" className="text-xl text-gray-600">
          About
        </Link>
        <Link href="/kontakt" className="text-xl text-gray-600">
          Kontakt
        </Link>
      </div>
    </header>
  );
};

export default Header;

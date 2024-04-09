"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/favicon/apple-touch-icon.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      className="sticky top-0 z-10 flex w-full items-center justify-between border bg-amber-50 py-4"
    >
      <Link href="/">
        <Image
          className="ml-5 rounded-full bg-gray-800"
          src={Logo}
          alt="Logo"
          width={70}
        />
      </Link>
      <div className="z-10 flex place-content-center gap-5 pr-5">
        <Link href="/" className="text-gray-600">
          Home
        </Link>
        <Link href="/about" className="text-gray-600">
          Über mich
        </Link>
        <Link href="/kontakt" className="text-gray-600">
          Kontakt
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;

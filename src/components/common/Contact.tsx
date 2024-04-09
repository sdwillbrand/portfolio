"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("so.willbrand@gmail.com");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={"flex max-w-sm flex-col items-center gap-2 p-5 md:ml-auto"}
    >
      <p className="break-words text-sm">
        Starten Sie jetzt Ihr Projekt mit mir! Als erfahrener Webdesigner bin
        ich bereit, Ihre Ideen umzusetzen und eine beeindruckende Website zu
        kreieren, die Ihre Ziele erfüllt!
      </p>
      <Link
        href="mailto:so.willbrand@gmail.com"
        onClick={handleCopy}
        className="flex cursor-pointer items-center gap-2 rounded-3xl border border-amber-500 from-transparent to-amber-400 p-4 transition-colors duration-200 hover:bg-gradient-to-r"
      >
        <MdAlternateEmail size={15} /> Projekt anfragen
      </Link>
    </motion.div>
  );
};
export default Contact;

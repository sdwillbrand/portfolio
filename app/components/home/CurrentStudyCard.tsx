"use client";
import { FaGolang } from "react-icons/fa6";
import LinkPreview from "../common/LinkPreview";
import { HTMLProps } from "react";

const CurrentStudy = ({ className }: HTMLProps<HTMLDivElement>) => (
  <div
    className={`${className} border-sky-700 border text-center flex flex-col lg:flex-row gap-5 md:gp-0 justify-between items-center p-6 bg-gradient-to-b from-transparent to-sky-950`}
  >
    <div className="md:mb-10">
      <p className="text-sm text-gray-500">
        I&apos;m constantly improving myself
      </p>
      <div className="flex flex-col items-center pt-2">
        <p>Currently, I am learning GoLang.</p>
        <FaGolang size={50} />
      </div>
      {/* <div className="flex flex-row gap-2 place-content-center pt-2">
        <p className="text-sm text-gray-500">
          I am also learning Svelte via my open source repos.
        </p>
        <SiSvelte size={20} className="text-gray-500" />
      </div> */}
    </div>
    <LinkPreview url="https://github.com/sdwillbrand/godis" />
  </div>
);
export default CurrentStudy;

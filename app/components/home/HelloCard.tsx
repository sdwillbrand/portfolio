import { FaEarlybirds, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { HTMLProps } from "react";
import Link from "next/link";

const socialMedias = [
  {
    href: "https://www.linkedin.com/in/sono-willbrand-2857a0243/",
    logo: <FaLinkedin size={27} />,
  },
  { href: "https://github.com/sdwillbrand", logo: <FaGithub size={27} /> },
];

const HelloCard = ({ className }: HTMLProps<HTMLDivElement>) => (
  <div
    id="hello"
    className={`${className} bg-gradient-to-tr from-transparent to-indigo-950`}
  >
    <div className="md:flex md:justify-between md:items-center">
      <div className="flex items-center">
        <FaEarlybirds size={35} className="mr-5" />
        <span>
          Hello, I&apos;m Sono. <br />
          <span className="text-sm text-gray-600">Software Developer</span>
        </span>
      </div>
      <div className="flex gap-5 mt-2 md:mt-0">
        {socialMedias.map(({ href, logo }, key) => (
          <Link
            className="rounded-md p-1 border border-gray-800 hover:scale-95 hover:bg-[rgba(255,255,255,0.1)]"
            key={key}
            target="_blank"
            href={href}
          >
            {logo}
          </Link>
        ))}
      </div>
    </div>

    <p className="text-4xl py-6 md:py-10 md:text-5xl">
      Creativity fuels the engine of progress.
    </p>
    <p className="text-md text-gray-600 pt-4">
      I am passionate about mastering new skills and relentlessly tackle
      challenges, constantly assessing my progress and growth.
    </p>
  </div>
);
export default HelloCard;

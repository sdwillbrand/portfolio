import { HTMLProps } from "react";
import Link from "next/link";

const HelloCard = ({ className }: HTMLProps<HTMLDivElement>) => (
  <div id="hello" className={`${className} p-5 pl-10`}>
    <p className="py-6 text-7xl md:py-10 md:text-5xl">
      Webkonstrukteur <br />
      mit Kreativität
    </p>
  </div>
);
export default HelloCard;

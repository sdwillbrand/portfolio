import { HTMLProps } from "react";

const HelloCard = ({ className }: HTMLProps<HTMLDivElement>) => (
  <div id="hello" className={`${className} p-5 md:pl-12`}>
    <p className="py-6 text-4xl transition md:py-12 md:text-7xl">
      Webkonstrukteur <br />
      mit Kreativität
    </p>
  </div>
);
export default HelloCard;

import { FaCss3, FaHtml5, FaJs, FaWordpressSimple } from "react-icons/fa";
import Contact from "../components/common/Contact";
import HelloCard from "../components/home/HelloCard";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-xl flex-col justify-between gap-3">
        <HelloCard className="w-full" />
        <Contact />
      </div>
      <div className="mb-5 flex animate-[slideInFromBottom_1s] flex-row justify-center gap-1">
        <FaWordpressSimple size={35} color="grey" />
        <FaHtml5 size={35} color="grey" />
        <FaCss3 size={35} color="grey" />
        <FaJs size={35} color="grey" />
      </div>
    </main>
  );
}

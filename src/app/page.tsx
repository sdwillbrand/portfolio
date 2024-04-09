import { FaCss3, FaHtml5, FaJs, FaWordpressSimple } from "react-icons/fa";
import Contact from "../components/common/Contact";
import HelloCard from "../components/home/HelloCard";

export default function Home() {
  return (
    <main className="flex h-[80vh] flex-col justify-between">
      <div className="flex w-full flex-col justify-between gap-3">
        <HelloCard className="w-full" />
        <Contact />
      </div>
      <div className="mb-5 flex animate-[slideInFromBottom_1s] flex-row justify-center gap-1">
        <FaWordpressSimple size={40} color="grey" />
        <FaHtml5 size={40} color="grey" />
        <FaCss3 size={40} color="grey" />
        <FaJs size={40} color="grey" />
      </div>
    </main>
  );
}

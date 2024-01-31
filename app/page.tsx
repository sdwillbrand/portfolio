import Contact from "./components/common/Contact";
import InfiniteWrite from "./components/common/InfiniteWrite";
import CurrentStudyCard from "./components/home/CurrentStudyCard";
import HelloCard from "./components/home/HelloCard";

export default function Home() {
  return (
    <main className="md:px-24 px-2">
      <div className="w-full grid md:grid-cols-8 py-5 gap-3">
        <HelloCard className=" border-indigo-700 border rounded-2xl w-full md:col-span-8 p-6 md:p-16" />
        <CurrentStudyCard className="rounded-3xl w-full md:col-span-8 lg:col-span-6 p-6 md:p-16" />
        <Contact className="border-indigo-500 border rounded-3xl w-full md:col-span-8 lg:col-span-2 p-10 md:p-6" />
      </div>
    </main>
  );
}

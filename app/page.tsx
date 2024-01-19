import Contact from "./components/common/Contact";
import InfiniteWrite from "./components/common/InfiniteWrite";
import CurrentStudyCard from "./components/home/CurrentStudyCard";
import HelloCard from "./components/home/HelloCard";

export default function Home() {
  return (
    <main className="flex place-content-center items-center w-screen flex-col gap-5 md:px-24">
      <h1 className="py-10 text-2xl">
        Sono
        <InfiniteWrite messages={[", Developer", " Dennis Willbrand"]} />
      </h1>
      <div className="w-full grid md:grid-cols-8 p-5 gap-2">
        <HelloCard className=" border-indigo-700 border rounded-2xl w-full md:col-span-5 p-6 md:p-16" />
        <CurrentStudyCard className="rounded-3xl w-full md:col-span-6 p-6 md:p-16" />
        <Contact className="border-indigo-500 border rounded-3xl w-full md:col-span-2 p-10 md:p-16" />
      </div>
    </main>
  );
}

import Contact from "../components/common/Contact";
import HelloCard from "../components/home/HelloCard";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-col gap-3">
        <HelloCard className="w-full" />
        <Contact className="mr-5 border border-amber-500 md:mr-3" />
      </div>
    </main>
  );
}

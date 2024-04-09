import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <main className="flex h-full max-w-screen-lg flex-col justify-center gap-5 px-10">
      <h1 className="mb-5 text-6xl">Kontakt</h1>
      <p>
        Du hast noch offene Fragen? Gerne beantworte ich diese in einem
        kostenlosen Beratungsgespräch. In dem ersten Gespräch können wir uns
        persönlich kennenlernen und über dein Projekt austauschen. So erhalte
        ich ein möglichst genaues Bild von deinen Zielen und kann dir ein
        unverbindliches und transparentes Angebot erstellen.
      </p>
      <p>
        Bitte kontaktiere mich per E-Mail unter:{" "}
        <Link
          href="mailto:so.willbrand@gmail.com"
          className="inline-flex cursor-pointer items-center text-amber-600"
        >
          so.willbrand@gmail.com
        </Link>
      </p>
      Ich freue mich darauf, von dir zu hören!
    </main>
  );
}

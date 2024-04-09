import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sono Dennis Willbrand - Webdesigner mit Kreativität",
  description:
    "Ich genieße die Kreativität des Webdesigns und tauche gerne in endlosen Möglichkeiten ein. Ich suche ständig nach Möglichkeiten, meine Fähigkeiten innovativ einzusetzen, angetrieben von meiner Liebe zur Gestaltung ansprechenden Webseiten.",
  keywords: ["HTML", "CSS", "JavaScript", "Wordpress", "Webdesign"],
  robots: "index, follow",
  openGraph: {
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

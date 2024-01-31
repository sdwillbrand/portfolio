import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sono Dennis Willbrand - Software Developer",
  description:
    "I am passionate about mastering new skills and relentlessly tackle challenges, constantly assessing my progress and growth.",
  keywords: [
    "React",
    "TypeScript",
    "JavaScript",
    "Golang",
    "Software Development",
  ],
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
      </body>
    </html>
  );
}

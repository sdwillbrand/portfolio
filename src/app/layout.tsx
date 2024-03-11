import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sono Dennis Willbrand - Software Developer",
  description:
    "I am passionate about mastering new skills and relentlessly tackle challenges, constantly assessing my progress and growth.",
  keywords: [
    "React",
    "Allgäu",
    "TypeScript",
    "JavaScript",
    "Golang",
    "WebDesign",
  ],
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
      </body>
    </html>
  );
}

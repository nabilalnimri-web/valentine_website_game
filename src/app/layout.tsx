import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo"
});

export const metadata: Metadata = {
  title: "The Omnitrix Database | Complete Ben 10 Encyclopedia",
  description: "Every Alien. Every Hero. Every Villain. The Complete Ben 10 Universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${exo2.variable} font-exo antialiased bg-black text-white`}>
        <Navbar />
        <Search />
        <main className="pt-20 min-h-[calc(100vh-80px)]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Star Wars Themed App",
  description: "A Next.js app with a readable and smooth Google font",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <main className="max-w-screen-2xl mx-auto overflow-hidden">
          <Header />
          <div className="min-h-[100vh] pl-10 pr-10"> {children} </div>
        </main>

      </body>
    </html>
  );
}

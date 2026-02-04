import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { ViewTransition } from "react";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen font-sans antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <main className="mx-auto max-w-screen-2xl overflow-hidden">
          <Header />
          <ViewTransition>
            <div className="pr-10 pl-10"> {children} </div>
          </ViewTransition>
        </main>
      </body>
    </html>
  );
}

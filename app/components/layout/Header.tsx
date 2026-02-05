"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Films", href: "/films" },
    { label: "People", href: "/people" },
    { label: "Planets", href: "/planets" },
    { label: "Starships", href: "/starships" },
    { label: "Vehicles", href: "/vehicles" },
    { label: "Species", href: "/species" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const logo = (
    <Link href="/" className="flex items-center gap-1">
      <span className="text-xl font-bold text-amber-300 sm:text-2xl">STAR </span>
      <span className="text-xl font-bold text-red-100 sm:text-2xl">WARS</span>
      <span className="text-xl font-bold text-white sm:text-2xl">WIKI</span>
    </Link>
  );

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <header className="sticky top-0 left-0 right-0 z-30 flex items-center border-white/10 bg-black/80 p-4 shadow-lg backdrop-blur-md">
        {/* Mobile: logo + hamburger */}
        <div className="flex w-full items-center justify-between md:hidden">
          {logo}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-amber-300"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop: centered logo + nav */}
        <div className="hidden w-full items-center justify-center gap-8 md:flex">
          {logo}
          <nav>
            <ul className="flex items-center gap-5">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className={isActive(link.href) ? "rounded-full bg-amber-300/10 px-4 py-2" : ""}
                >
                  <Link
                    href={link.href}
                    className={
                      `text-sm font-extrabold transition-colors duration-300 hover:text-amber-300 sm:text-base ` +
                      (isActive(link.href) ? "text-amber-300" : "text-white")
                    }
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

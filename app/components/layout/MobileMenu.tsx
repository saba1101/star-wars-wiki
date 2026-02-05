"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Films", href: "/films" },
  { label: "People", href: "/people" },
  { label: "Planets", href: "/planets" },
  { label: "Starships", href: "/starships" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Species", href: "/species" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 max-w-[85vw] flex-col border-r border-white/10 bg-black/95 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-lg font-bold text-amber-300">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-amber-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-amber-300/15 text-amber-300"
                      : "text-white/90 hover:bg-white/10 hover:text-amber-200"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-4">
          <p className="text-center text-xs text-white/50">Star Wars Wiki</p>
        </div>
      </aside>
    </>
  );
}

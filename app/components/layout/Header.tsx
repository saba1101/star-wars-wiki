"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

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

  return (
    <header className="bg sticky top-0 right-0 left-0 z-50 flex items-center justify-center border-white/10 p-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-center gap-150 rounded-full">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <span className="text-2xl font-bold text-amber-300">STAR </span>
            <span className="text-2xl font-bold text-red-100">WARS</span>
            <span className="text-2xl font-bold text-white">WIKI</span>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-7">
            {navigationLinks?.map((link) => (
              <li
                key={link.href}
                className={`${isActive(link.href) ? "rounded-full bg-amber-300/10 px-4 py-2" : ""}`}
              >
                <Link
                  href={link.href}
                  className={
                    `text-md font-extrabold transition-colors duration-300 hover:text-amber-300 ` +
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
  );
};

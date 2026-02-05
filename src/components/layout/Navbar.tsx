"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


/*
  PURPOSE:
  - Display the top navigation bar
  - Shown on all pages via layout.tsx
*/

export default function Navbar() {
  /*
    UI STRUCTURE:
    - A navigation container
    - Right-aligned menu items
    - Uses brand colors from Tailwind config
  */
  const pathname=usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 ">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        
        {/* Logo (left) */}
        <div className="font-semibold text-[var(--color-primary)]">
          My Portfolio
        </div>

        {/* Menu (right) */}
       <ul className="flex gap-4 md:gap-8">
                <li>
                  <Link
                    href="/"
                    className={`cursor-pointer pb-1 text-[var(--color-primary)]
                      ${pathname === "/" ? "border-b-2 border-[var(--color-primary)]" : "border-b-2 border-transparent"}
                      hover:border-[var(--color-primary)]`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/projects"
                    className={`cursor-pointer pb-1 text-[var(--color-primary)]
                      ${pathname === "/projects" ? "border-b-2 border-[var(--color-primary)]" : "border-b-2 border-transparent"}
                      hover:border-[var(--color-primary)]`}
                  >
                    Project
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={`cursor-pointer pb-1 text-[var(--color-primary)]
                      ${pathname === "/about" ? "border-b-2 border-[var(--color-primary)]" : "border-b-2 border-transparent"}
                      hover:border-[var(--color-primary)]`}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={`cursor-pointer pb-1 text-[var(--color-primary)]
                      ${pathname === "/contact" ? "border-b-2 border-[var(--color-primary)]" : "border-b-2 border-transparent"}
                      hover:border-[var(--color-primary)]`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

      </div>
    </nav>
  );
}

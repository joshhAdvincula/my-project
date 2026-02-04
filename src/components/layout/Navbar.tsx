"use client";

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 ">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        
        {/* Logo (left) */}
        <div className="font-semibold text-[var(--color-primary)]">
          My Portfolio
        </div>

        {/* Menu (right) */}
        <ul className="flex gap-4 md:gap-8">
          <li>Home</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      </div>
    </nav>
  );
}

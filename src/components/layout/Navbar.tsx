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
    <nav className="bg-[var(--color-primary)] text-white p-6">

      {/*
        MENU LIST:
        - Home
        - Project
        - About
        - Contact
      */}
      <ul className="flex gap-8 text-sm font-medium text-secondary">
        <li>Home</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

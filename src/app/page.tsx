/*
  HOME PAGE
  - Displays hero content only
  - Navbar is handled in layout.tsx
*/

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-30 grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT: Text content */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
          Jossa Marie Advincula
        </h1>

        <p className="mt-4 font-semibold text-sm md:text-base">
          Project Coordinator | QA Specialist | Product Owner | Aspiring Project Manager
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          I help digital teams build reliable and user-centered products by combining
          strong coordination, analytical testing, and process-driven collaboration.
          With an Information Systems background and hands-on experience in both QA and
          product coordination, I ensure every feature aligns with business goals and
          real user needs.
        </p>

        <button className="mt-6 px-6 py-2 rounded-md text-white bg-[var(--color-primary)] hover:opacity-90">
          Get in touch
        </button>
      </div>

      {/* RIGHT: Visual blocks */}
      <div className="relative flex justify-center">
        <div className="w-68 h-68 bg-[var(--color-primary)] rounded-lg"></div>
        <div className="absolute top-14 left-12 w-56 h-56 border-2 border-blue-400 rounded-lg"></div>
      </div>
    </section>
  );
}

/*
  ABOUT PAGE
  - Two-column layout
  - About section + Skills section
*/

export default function AboutPage() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — IMAGE */}
          <div className="w-full h-80 md:h-96 bg-[var(--color-primary)] rounded-xl">
            {/* Image will go here */}
          </div>

          {/* RIGHT — TEXT */}
          <div>
            <p className="text-sm font-medium text-gray-500">
              About Me
            </p>

            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
              Hi! I’m Jossa Marie Advincula
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I’m an enthusiastic and detail-oriented individual passionate about project
              management and developing software solutions that enhance business operations.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              As a Bachelor of Science in Information Systems graduate, I enjoy transforming
              ideas into structured workflows and collaborating with teams to create systems
              that truly make work easier and smarter.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS & TOOLS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — TEXT */}
          <div>
            <p className="text-sm font-medium text-gray-500">
              Skills and Tools
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
              My skills
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              A combination of project management, quality assurance, and design collaboration
              skills that enable me to bridge communication between teams and deliver efficient,
              user-centered products.
            </p>
          </div>

          {/* RIGHT — SKILL CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-[var(--color-primary)] text-white">
              <h3 className="font-semibold">Project Management</h3>
              <p className="mt-2 text-sm opacity-90">
                Plan, organize, and deliver projects with clear timelines and team alignment.
              </p>
            </div>

            <div className="p-6 rounded-xl border">
              <h3 className="font-semibold">Quality Assurance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ensure every release meets quality standards through testing and feedback.
              </p>
            </div>

            <div className="p-6 rounded-xl border">
              <h3 className="font-semibold">Soft Skills</h3>
              <p className="mt-2 text-sm text-gray-600">
                Communicate clearly, lead effectively, and adapt to changing project needs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-primary)] text-white">
              <h3 className="font-semibold">Design & Collaboration</h3>
              <p className="mt-2 text-sm opacity-90">
                Collaborate with teams to deliver user-centered and well-aligned solutions.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

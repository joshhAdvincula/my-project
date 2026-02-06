/*
  PROJECTS PAGE
  - Shows featured projects
  - Each project has:
    - Image box
    - Date
    - Title
    - Description
    - Tech / skill tags
*/

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-[var(--color-primary)]">
        Projects
      </h1>

      <h2 className="mt-2 text-xl font-semibold">
        Featured Projects
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl">
        A selection of academic and professional projects that showcase my experience
        in product coordination, QA validation, and process-driven development.
      </p>

      {/* PROJECT LIST */}
<div className="mt-12 space-y-16">

  {/* PROJECT 1 — IMAGE LEFT */}
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div className="w-full h-56 bg-gray-200 rounded-md" />
    <div>
      <p className="text-sm text-gray-500">October 2023 – Active</p>
      <h3 className="mt-2 font-semibold text-[var(--color-primary)]">
        HiveLabs – Technologies Corp. Projects
      </h3>
      <p className="mt-3 text-gray-600">
        Supported multiple web and system development projects.
      </p>
      <div className="mt-4 flex flex-wrap gap-2"> 
        <span className="px-2 py-1 text-sm border rounded-full">Django Backend</span> 
        <span className="px-3 py-1 text-sm border rounded-full">API Tools</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Tailwind</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Agile</span> 
      </div>
    </div>
  </div>

  {/* PROJECT 2 — IMAGE RIGHT */}
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div>
      <p className="text-sm text-gray-500">August – September 2023</p>
      <h3 className="mt-2 font-semibold text-[var(--color-primary)]">
        Higher Education Information Management System
      </h3>
      <p className="mt-3 text-gray-600">
        A university-based information management system developed for academic use.
      </p>
      <div className="mt-4 flex flex-wrap gap-2"> 
        <span className="px-3 py-1 text-sm border rounded-full">Django Backend</span> 
        <span className="px-3 py-1 text-sm border rounded-full">API Tools</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Tailwind</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Agile</span> 
      </div>
    </div>
    <div className="w-full h-56 bg-gray-200 rounded-md" />
  </div>

  {/* PROJECT 3 — IMAGE LEFT */}
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div className="w-full h-56 bg-gray-200 rounded-md" />
    <div>
      <p className="text-sm text-gray-500">October 2023 – Active</p>
      <h3 className="mt-2 font-semibold text-[var(--color-primary)]">
        HiveLabs – Technologies Corp. Projects
      </h3>
      <p className="mt-3 text-gray-600">
        Continued coordination and QA support across multiple systems.
      </p>
      {/* TAGS */} 
      <div className="mt-4 flex flex-wrap gap-2"> 
        <span className="px-3 py-1 text-sm border rounded-full">Django Backend</span> 
        <span className="px-3 py-1 text-sm border rounded-full">API Tools</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Tailwind</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Agile</span> 
      </div>
    </div>
  </div>

  {/* PROJECT 4 — IMAGE RIGHT */}
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div>
      <p className="text-sm text-gray-500">August – September 2023</p>
      <h3 className="mt-2 font-semibold text-[var(--color-primary)]">
        Higher Education Information Management System
      </h3>
      <p className="mt-3 text-gray-600">
        Focused on structured data handling, validation, and usability.
      </p>
      <div className="mt-4 flex flex-wrap gap-2"> 
        <span className="px-3 py-1 text-sm border rounded-full">Laravel Framework</span> 
        <span className="px-3 py-1 text-sm border rounded-full">QA & Testing</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Tailwind</span> 
        <span className="px-3 py-1 text-sm border rounded-full">Agile</span> </div>
    </div>
    <div className="w-full h-56 bg-gray-200 rounded-md" />
  </div>

</div>


      {/* WHAT I LEARNED */}
      <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold text-[var(--color-primary)]">
          What I Learned
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Through these projects, I strengthened my ability to bridge technical
          requirements and business goals, ensuring structured processes, clear
          communication, and user-focused delivery.
        </p>
      </div>

    </section>
  );
}

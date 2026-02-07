/*
  CONTACT PAGE
  - Call to action section
  - Uses reusable ActionButton component
*/

import ActionButton from "@/components/common/ActionButton";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24 text-center">

      {/* Section label */}
      <p className="text-sm font-medium text-gray-500">
        Get in Touch
      </p>

      {/* Main heading */}
      <h1 className="mt-2 text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
        Let&apos;s Work Together !
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        I&apos;m always interested in hearing about new projects and opportunities.
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">

        {/* Send Email (opens Gmail) */}
        <ActionButton
          href="mailto:assojmariepro7@gmail.com"
          label="Send Email"
          variant="primary"
        />

        {/* View CV */}
        <ActionButton
          href="/JOSSA_ADVINCULA_CV.pdf"
          label="View Credentials"
          variant="secondary"
        />

      </div>
    </section>
  );
}

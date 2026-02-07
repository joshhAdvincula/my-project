/*
  ActionButton Component
  - Used for external actions (email, PDF, external links)
  - Opens in a new tab
*/

type ActionButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function ActionButton({
  href,
  label,
  variant = "primary",
}: ActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-2 rounded-md text-sm font-medium transition
        ${
          variant === "primary"
            ? "bg-[var(--color-primary)] text-white hover:opacity-90"
            : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
        }
      `}
    >
      {label}
    </a>
  );
}

import { socials } from "../data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-dim)]">
          © {new Date().getFullYear()} Aditya Shaw
        </p>
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-dim)]">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="hover:text-[var(--color-text)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

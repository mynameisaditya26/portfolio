import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { socials, siteMeta } from "../data/socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex flex-col items-center text-center">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <img
                src="/profile.png"
                alt="Aditya Shaw"
                width={128}
                height={128}
                className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover object-top ring-2 ring-[var(--color-border)] ring-offset-4 ring-offset-[var(--color-bg)] shadow-lg"
              />
              <span
                className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-[var(--color-bg)]"
                title="Open to opportunities"
                aria-hidden
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 text-sm font-medium tracking-widest uppercase text-[var(--color-accent)]"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-text)]"
          >
            {siteMeta.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-[var(--color-text-muted)] font-medium"
          >
            {siteMeta.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-[var(--color-text-dim)] leading-relaxed"
          >
            {siteMeta.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card)] transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-12 flex items-center justify-center gap-5"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

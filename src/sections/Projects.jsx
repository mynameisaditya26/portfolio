import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectPreview } from "../components/ProjectPreviews";

function FeaturedCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="group grid md:grid-cols-2 gap-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden hover:border-[var(--color-border-hover)] transition-colors"
    >
      {/* Preview */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative h-48 md:h-auto md:min-h-[240px] overflow-hidden border-b md:border-b-0 md:border-r border-[var(--color-border)] text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]">
          <ProjectPreview projectId={project.id} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Content */}
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-[var(--color-text-dim)] shrink-0 pt-1">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex gap-2 text-xs text-[var(--color-text-dim)]"
            >
              <span className="text-[var(--color-accent)] shrink-0">▹</span>
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            View details
            <ArrowUpRight size={14} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-[var(--color-text-dim)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={16} />
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-[var(--color-text-dim)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden hover:border-[var(--color-border-hover)] transition-colors"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative h-36 overflow-hidden border-b border-[var(--color-border)] text-left cursor-pointer"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectPreview projectId={project.id} />
        </div>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-[var(--color-text-dim)] shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-dim)]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpen(project)}
            className="text-xs font-medium text-[var(--color-accent)]"
          >
            Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
              aria-label="Live demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Preview banner */}
          <div className="relative h-44 sm:h-52 border-b border-[var(--color-border)] overflow-hidden">
            <ProjectPreview projectId={project.id} />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 text-white/90 hover:bg-black/70 transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <h2
              id="project-modal-title"
              className="text-2xl font-bold text-[var(--color-text)]"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-mono text-[var(--color-text-dim)]">
              {project.year}
            </p>

            <p className="mt-5 text-[var(--color-text-muted)] leading-relaxed">
              {project.longDescription}
            </p>

            {project.problem && (
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Problem
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Solution
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {project.solution}
                </p>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-sm text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                      ▹
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-accent)] text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text)]">
            Projects
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl">
            Selected work in AI infrastructure, agents, and backend systems.
            Each card includes a UI preview of the system interface.
          </p>
        </motion.div>

        <div className="space-y-8">
          {featured.map((p) => (
            <FeaturedCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-lg font-semibold text-[var(--color-text)]">
              More projects
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <CompactCard key={p.id} project={p} onOpen={setSelected} />
              ))}
            </div>
          </>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

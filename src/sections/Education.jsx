import { motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text)] mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-6 border-l-2 border-[var(--color-border)]"
            >
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-[var(--color-text)]">
                  {edu.degree}
                </h3>
                <span className="text-sm text-[var(--color-text-dim)]">
                  {edu.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {edu.institution} · {edu.location}
              </p>
              {edu.details && (
                <p className="mt-1 text-sm text-[var(--color-accent)]">
                  {edu.details}
                </p>
              )}
              {edu.coursework?.length > 0 && (
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">
                  Relevant coursework: {edu.coursework.join(", ")}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

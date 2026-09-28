import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text)] mb-10"
        >
          About
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/profile.png"
              alt="Aditya Shaw"
              width={200}
              height={200}
              className="h-40 w-40 sm:h-44 sm:w-44 rounded-2xl object-cover object-top border border-[var(--color-border)] shadow-md"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="space-y-5 text-[var(--color-text-muted)] leading-relaxed"
          >
            <p>
              I'm a final-year B.Tech student in Information Technology at
              Meghnad Saha Institute of Technology (CGPA 7.57). My work sits at
              the intersection of backend engineering and AI infrastructure —
              designing low-latency LLM workflows, RAG architectures, dynamic
              agents, and containerized microservices.
            </p>
            <p>
              I enjoy building systems that are observable, fault-tolerant, and
              practical. Recent projects include a LangGraph-based RAG agent with
              tool calling, a long-term memory interview coach using Mem0 and
              Qdrant, and an emotionally-aware Telegram agent enforced with
              Pydantic AI schemas and deployed on Kubernetes.
            </p>
            <p>
              Alongside AI systems I have solid experience with Node.js /
              Express backends, real-time communication with Socket.io, MongoDB,
              Redis, and classic CS fundamentals. I've solved 400+ DSA problems
              and regularly participate in college competitive programming and
              hackathons.
            </p>
            <p>
              I'm looking for Backend / AI Backend / SDE roles where I can apply
              these skills to real products and continue growing in distributed
              systems and GenAI infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

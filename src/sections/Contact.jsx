import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { socials } from "../data/socials";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend configured — open mailto as fallback
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text)] mb-4"
        >
          Contact
        </motion.h2>
        <p className="text-[var(--color-text-muted)] mb-10">
          Open to backend, AI infrastructure, and SDE roles. Feel free to reach
          out.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">{socials.email}</span>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">github.com/mynameisaditya26</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
            {status && (
              <p className="text-sm text-[var(--color-text-dim)]">{status}</p>
            )}
            <p className="text-xs text-[var(--color-text-dim)]">
              Form opens your email client. You can later connect Formspree,
              EmailJS, or Resend.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

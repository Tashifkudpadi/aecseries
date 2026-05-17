import { motion } from "framer-motion";
import { whyAttend } from "../data/content";
import { fadeUp, fadeUpItem, stagger, VIEWPORT } from "../lib/motion";

const icons = {
  ai: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="5" width="10" height="10" rx="3" />

      <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10" r="1" fill="currentColor" stroke="none" />

      <path d="M10 13c.6.5 1.4.8 2 .8s1.4-.3 2-.8" />

      <path d="M12 5V3" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />

      <path d="M4 12a8 8 0 0 0 8 8" opacity="0.5" />
      <path d="M20 12a8 8 0 0 1-8 8" opacity="0.5" />

      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  rocket: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  database: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  cloud: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  users: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  award: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
};

function renderDesc(item) {
  if (item.icon !== "award") return item.desc;
  const parts = item.desc.split(/(Awards Ceremony|AI, data, cloud, and intelligent automation)/g);
  return parts.map((part, idx) => {
    if (part === "Awards Ceremony" || part === "AI, data, cloud, and intelligent automation") {
      return (
        <strong key={idx} className="font-semibold text-ink-900 dark:text-ink-50">
          {part}
        </strong>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

function WhyAttend() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
            Why Attend
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
            From Experimentation to{" "}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              Autonomous Execution
            </span>
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-ink-500 dark:text-ink-400">
            Are organizations truly ready to move from AI experimentation and
            Agentic AI pilots to autonomous, production-grade enterprise
            execution?
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {whyAttend.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 transition-all hover:border-brand-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] dark:border-ink-800 dark:bg-ink-900 dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/12 to-indigo-500/12 text-brand-600 dark:text-brand-400">
                <span className="h-6 w-6">{icons[item.icon]}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">
                {renderDesc(item)}
              </p>
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/5 opacity-0 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyAttend;

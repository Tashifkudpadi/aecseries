import { motion } from "framer-motion";
import { keyTopics } from "../data/content";
import { fadeUp, fadeUpItem, stagger, VIEWPORT } from "../lib/motion";

function KeyTopics() {
  return (
    <section
      id="topics"
      className="relative overflow-hidden bg-ink-50 py-24 sm:py-32 dark:bg-ink-950"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
            Key Discussion Topics
          </span>
          {/* <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
            Six tracks shaping the{' '}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              enterprise of 2027
            </span>
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-ink-500 dark:text-ink-400">
            From data foundations to AI agents in ERP, CRM and ITSM — the conversations enterprise leaders need to be in.
          </p> */}
        </motion.div>

        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {keyTopics.map((topic, i) => (
            <motion.article
              key={topic.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 shadow-sm transition-all hover:border-brand-500 hover:shadow-[0_28px_55px_rgba(37,99,235,0.15)] dark:border-ink-800 dark:bg-ink-900 dark:hover:shadow-[0_28px_55px_rgba(0,0,0,0.45)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-500/10 to-indigo-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
              />

              <div className="pointer-events-none absolute right-5 top-5 select-none bg-gradient-to-br from-brand-100 to-indigo-100 bg-clip-text text-[64px] font-black leading-none tracking-tighter text-transparent dark:from-brand-900/60 dark:to-indigo-900/60">
                {String(i + 1).padStart(2, "0")}
              </div>
              {/* 
              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {topic.tag}
                </span>
              </div> */}

              <h3 className="relative z-10 mt-4 text-xl font-semibold leading-snug tracking-tight text-ink-900 dark:text-ink-50">
                {topic.title}
              </h3>
              <p className="relative z-10 mt-3 text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">
                {topic.desc}
              </p>

              <div className="relative z-10 mt-6 flex items-center justify-between border-t border-dashed border-ink-200 pt-4 dark:border-ink-800">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:gap-3 dark:text-brand-400">
                  {/* Explore track */}
                  {/* <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg> */}
                </span>
                <div className="flex -space-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default KeyTopics;

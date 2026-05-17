import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agenda } from "../data/content";
import { fadeUp, fadeUpItem, VIEWPORT } from "../lib/motion";

const typeMeta = {
  keynote: {
    label: "Keynote",
    dot: "bg-brand-600",
    chip: "bg-brand-50 text-brand-700 border-brand-100 dark:bg-brand-950 dark:text-brand-300 dark:border-brand-900",
  },
  panel: {
    label: "Panel",
    dot: "bg-indigo-600",
    chip: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-900",
  },
  fireside: {
    label: "Fireside",
    dot: "bg-amber-500",
    chip: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900",
  },
  roundtable: {
    label: "Roundtable",
    dot: "bg-emerald-600",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900",
  },
  address: {
    label: "Address",
    dot: "bg-slate-700",
    chip: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  },
  break: {
    label: "Break",
    dot: "bg-pink-500",
    chip: "bg-pink-50 text-pink-700 border-pink-100 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-900",
  },
};

function AgendaRow({ item, index, isOpen, onToggle }) {
  const meta = typeMeta[item.type] || typeMeta.address;
  const isBreak = item.type === "break";
  const hasDesc = Boolean(item.desc);

  return (
    <motion.li
      variants={fadeUpItem}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      custom={index}
      className="relative"
    >
      <div
        className={`overflow-hidden rounded-2xl border transition ${
          isBreak
            ? "border-dashed border-ink-200 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-900/40"
            : isOpen
              ? "border-brand-500 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:bg-ink-900 dark:shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
              : "border-ink-200 bg-white hover:border-brand-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)] dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-600 dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        }`}
      >
        <button
          type="button"
          onClick={() => hasDesc && onToggle()}
          disabled={!hasDesc}
          aria-expanded={isOpen}
          className={`flex w-full items-center gap-4 p-5 text-left md:gap-6 ${
            hasDesc ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <div className="flex shrink-0 flex-col items-start gap-2 md:w-32">
            <span className="font-mono text-sm font-semibold tracking-tight text-ink-900 dark:text-ink-50">
              {item.time}
            </span>
            {/* <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${meta.chip}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
              {meta.label}
            </span> */}
          </div>

          <div className="relative hidden md:block">
            <div
              className={`h-3 w-3 rounded-full ring-4 ring-white dark:ring-ink-950 ${meta.dot}`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink-900 dark:text-ink-50">
              {item.title}
            </h3>
          </div>

          {hasDesc && (
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                isOpen
                  ? "border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300"
                  : "border-ink-200 bg-white text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400"
              }`}
              aria-hidden
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.span>
          )}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && hasDesc && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-ink-100 px-5 pb-5 pt-4 dark:border-ink-800 md:pl-[10.5rem]">
                <p className="text-[14.5px] leading-relaxed text-ink-500 dark:text-ink-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

function Agenda() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section id="agenda" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
            Event Agenda
          </span>
          {/* <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
            One day,{" "}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              two dozen leaders
            </span>
            , one conversation.
          </h2> */}
          {/* <p className="mt-5 text-balance text-lg leading-relaxed text-ink-500 dark:text-ink-400">
            Keynotes, leadership panels, fireside chats and roundtables — tap
            any session to read what it covers.
          </p> */}
        </motion.div>

        {/* <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {Object.entries(typeMeta).map(([k, m]) => (
              <span
                key={k}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${m.chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                {m.label}
              </span>
            ))}
          </div> */}

        <div className="relative mt-12">
          <div className="absolute left-[7.25rem] top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-ink-200 to-transparent md:block" />

          <ol className="flex flex-col gap-3">
            {agenda.map((item, i) => (
              <AgendaRow
                key={`${item.time}-${i}`}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </ol>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-gradient-to-r from-ink-50 to-white p-6 text-center dark:border-ink-800 dark:from-ink-900 dark:to-ink-950 sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">
              Full agenda · 08:30 – 15:10
            </p>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              Riyadh, Kingdom of Saudi Arabia. Session order subject to change.
            </p>
          </div>
          <a
            href="#cta"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Reserve your seat
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Agenda;

import { motion } from "framer-motion";
import { fadeUp, fadeUpItem, stagger, VIEWPORT } from "../lib/motion";

const industries = [
  { name: "Government", icon: "🏛️" },
  { name: "Banking", icon: "🏦" },
  { name: "Insurance", icon: "🛡️" },
  { name: "E-Commerce", icon: "🛒" },
  { name: "Telecom", icon: "📡" },
  { name: "Oil & Gas", icon: "⛽" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Retail", icon: "🏬" },
  { name: "Healthcare", icon: "🩺" },
  { name: "Mining", icon: "⛏️" },
  { name: "FMCG", icon: "📦" },
  { name: "Sports", icon: "🏆" },
  { name: "Aviation", icon: "✈️" },
  { name: "Logistics", icon: "🚚" },
  { name: "Construction", icon: "🏗️" },
  { name: "Electricity", icon: "🔋" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Automobile", icon: "🚗" },
];

function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[24rem] w-[24rem] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
            Industries
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
            Industries We{" "}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              Represent
            </span>
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-ink-500 dark:text-ink-400">
            Senior leaders from across the enterprise spectrum — government,
            regulated industries, large enterprises, and high-growth sectors.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.04, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border border-ink-200 bg-white/80 px-4 py-5 text-center backdrop-blur transition-all hover:border-brand-500 hover:bg-gradient-to-br hover:from-brand-50 hover:to-indigo-50 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] dark:border-ink-800 dark:bg-ink-900/70 dark:hover:from-brand-950/40 dark:hover:to-indigo-950/40"
            >
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                {ind.icon}
              </span>
              <span className="text-[13.5px] font-semibold text-ink-700 transition group-hover:text-brand-700 dark:text-ink-300 dark:group-hover:text-brand-400">
                {ind.name}
              </span>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;

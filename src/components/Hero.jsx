import { motion } from "framer-motion";
import { hero } from "../data/content";
import Logo from "../assets/Logo.png";
import { fadeUp, paragraph, stagger, VIEWPORT } from "../lib/motion";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-40 pb-20 sm:pt-44"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute -left-56 top-20 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,_var(--color-brand-500)_0%,_transparent_65%)] blur-3xl"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
            className="absolute -right-56 top-44 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,_#6366f1_0%,_transparent_65%)] blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_#a78bfa_0%,_transparent_70%)] blur-3xl"
          />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/90 px-4 py-1.5 text-sm font-medium text-ink-700 shadow-sm backdrop-blur dark:border-ink-800 dark:bg-ink-900/80 dark:text-ink-300"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-600"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span>{hero.eyebrow}</span>
          <span className="text-ink-300 dark:text-ink-700">·</span>
          <span className="text-brand-600 dark:text-brand-400">
            Autonomous Enterprise Conference
          </span>
        </motion.div> */}

          <img
            src={Logo}
            alt="logo"
            style={{ borderRadius: "18px", width: "600px" }}
            // className="bg-[#fff]"
          />
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-balance max-w-3xl py-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl md:text-6xl"
          >
            {hero.title}:{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-500 bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-2 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-indigo-50 px-5 py-2 text-sm font-semibold tracking-tight text-ink-900 shadow-sm dark:border-brand-800/40 dark:from-brand-950/50 dark:via-ink-900 dark:to-indigo-950/50 dark:text-ink-50 sm:text-base"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-700 dark:text-brand-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              27th January 2027
            </span>
            <span className="h-3.5 w-px bg-ink-300 dark:bg-ink-700" />
            <span className="inline-flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Riyadh, Saudi Arabia
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_12px_28px_rgba(37,99,235,0.35)]"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#agenda"
              className="rounded-full border border-ink-200 bg-white px-7 py-3.5 font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-50"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {hero.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-ink-200 bg-white/70 p-4 text-left backdrop-blur transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900/60"
              >
                <div className="bg-gradient-to-br from-brand-600 to-indigo-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-ink-500 dark:text-ink-400">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto mt-20 max-w-6xl px-6"
      >
        <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-b from-ink-50 to-white shadow-[0_30px_60px_rgba(37,99,235,0.15)]">
          <div className="aspect-[16/9] p-7">
            <div className="flex h-full overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-md">
              <aside className="hidden w-48 flex-col gap-4 border-r border-ink-100 bg-ink-50 p-5 md:flex">
                <div className="h-4 w-3/5 rounded bg-gradient-to-r from-brand-600 to-brand-400" />
                <div className="flex flex-col gap-2">
                  <div className="h-7 rounded-md bg-brand-600/15" />
                  <div className="h-7 rounded-md bg-ink-200/70" />
                  <div className="h-7 rounded-md bg-ink-200/70" />
                  <div className="h-7 rounded-md bg-ink-200/70" />
                </div>
              </aside>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-44 rounded bg-ink-200" />
                  <div className="h-7 w-20 rounded-full bg-brand-600" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="flex flex-col gap-2 rounded-xl border border-ink-100 bg-ink-50 p-3"
                    >
                      <div className="h-2 w-4/5 rounded bg-ink-200" />
                      <div className="h-2 w-1/2 rounded bg-brand-500/70" />
                      <div className="mt-auto h-10 rounded-md bg-gradient-to-tr from-brand-500/15 to-indigo-500/15" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <div className="h-6 w-3/5 rounded-full border border-ink-100 bg-ink-50" />
                  <div className="h-6 w-2/5 self-end rounded-full bg-brand-600" />
                  <div className="h-6 w-3/5 rounded-full border border-ink-100 bg-ink-50" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-auto grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow-[0_12px_40px_rgba(37,99,235,0.35)] backdrop-blur"
              aria-label="Play teaser"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 pl-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div> */}
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="relative overflow-hidden rounded-3xl border border-brand-200/60 bg-gradient-to-br from-white/90 to-brand-50/40 p-8 shadow-[0_8px_32px_rgba(37,99,235,0.08)] dark:border-brand-800/40 dark:from-ink-900/80 dark:to-ink-950/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-brand-500" />

            <div className="relative z-10 flex flex-col gap-5 text-justify text-[15.5px] leading-relaxed text-ink-700 dark:text-ink-300 sm:text-base">
              <motion.p variants={paragraph} className="pl-5">
                Saudi Arabia is one of the most important emerging markets for
                AI, Agentic AI, data, cloud, and automation in the Middle East.
                The Kingdom's Vision 2030 agenda continues to drive investment
                in digital transformation, smart government, non-oil economic
                diversification, and advanced technology adoption. SDAIA's
                national data and AI strategy is directly linked to Vision 2030
                and aims to position Saudi Arabia as a leader in data and
                artificial intelligence.
              </motion.p>
              <motion.p variants={paragraph} className="pl-5">
                The market is moving from basic digital transformation to
                advanced enterprise intelligence, where Agentic AI is expected
                to play a major role in enabling smarter, faster, and more
                autonomous business operations. Organizations are no longer only
                asking how to digitize processes; they are asking how to use AI,
                Agentic AI, data, cloud, and automation to improve
                decision-making, operational efficiency, customer experience,
                productivity, and business resilience.
              </motion.p>
              <motion.p variants={paragraph} className="pl-5">
                AI infrastructure is also becoming a major national priority.
                Reuters reported significant AI-related infrastructure activity
                involving Humain, including financing for AI data center
                capacity and partnerships connected to advanced computing
                infrastructure. This supports the broader shift toward
                enterprise AI adoption, Agentic AI readiness, cloud
                modernization, and data-driven business models.
              </motion.p>
              <motion.p variants={paragraph} className="pl-5">
                Independent market estimates also point to strong growth in
                Saudi Arabia's AI sector. Grand View Research estimated Saudi
                Arabia's AI market at around USD 9.26 billion in 2025, with
                projected growth to about USD 102.8 billion by 2033. While
                forecasts vary by source and methodology, the direction is
                clear: Saudi Arabia is becoming a high-growth market for
                enterprise AI, Agentic AI, data platforms, cloud infrastructure,
                automation, and intelligent business applications.
              </motion.p>
              <motion.p
                variants={paragraph}
                className="rounded-r-xl bg-brand-50/60 py-3 pl-5 pr-4 font-medium text-ink-900 dark:bg-brand-950/30 dark:text-ink-100"
              >
                For 2027, this creates a timely opportunity for the Autonomous
                Enterprise Conference – Riyadh to address the most important
                question facing enterprise leaders:{" "}
                <span className="text-brand-700 dark:text-brand-400">
                  Are organizations truly ready to move from AI experimentation
                  and Agentic AI pilots to autonomous, production-grade
                  enterprise execution?
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;

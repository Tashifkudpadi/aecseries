import { motion } from "framer-motion";
import Logo from "../assets/capstoneLogoblack.png";
import { fadeUp, VIEWPORT } from "../lib/motion";

function AboutOrganiser() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink-50 py-24 sm:py-28 dark:bg-ink-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-500/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-indigo-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="
grid grid-cols-1 items-center gap-12
rounded-3xl border border-ink-200
bg-white p-8
shadow-[0_10px_40px_rgba(15,23,42,0.06)]
dark:border-ink-800 dark:bg-ink-900
sm:p-12
lg:grid-cols-12 lg:gap-16
"
        >
          <div className="relative flex flex-col items-start lg:col-span-4">
            <div className="relative w-full max-w-sm rounded-2xl border border-ink-200 bg-gradient-to-br from-white to-ink-50 p-8 shadow-md dark:border-ink-800 dark:from-ink-900 dark:to-ink-950">
              <img
                src={Logo}
                alt="Capstone MENA logo"
                className="w-full max-w-[260px]"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <p className="mt-6 max-w-sm text-base font-medium italic leading-relaxed text-ink-600 dark:text-ink-400">
              <span className="text-2xl font-bold not-italic text-brand-600 dark:text-brand-400">
                &ldquo;
              </span>
              Leading the way with intelligence
              <span className="text-2xl font-bold not-italic text-brand-600 dark:text-brand-400">
                &rdquo;
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:col-span-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
              About the Organiser
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
              Capstone Business Intelligence
            </h2>

            <p className="mt-6 text-[15.5px] leading-relaxed text-ink-600 dark:text-ink-400">
              Capstone Business Intelligence is a global platform provider
              specializing in high-impact business intelligence and emerging
              technology Confexs.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600 dark:text-ink-400">
              We curate executive-level forums that empower senior leaders with
              actionable insights, strategic knowledge, and meaningful networks.
              With deep industry expertise and a strong global network, Capstone
              delivers meticulously designed Confexs, leadership forums, and
              knowledge platforms.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600 dark:text-ink-400">
              Our platforms connect decision-makers from enterprises, government
              bodies, and technology providers, driving innovation,
              collaboration, and long-term business value.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { value: "12+", label: "Years of Expertise" },
                { value: "50+", label: "Conferences Hosted" },
                { value: "20K+", label: "Leaders Engaged" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ink-200 bg-gradient-to-br from-white to-ink-50 px-4 py-3 dark:border-ink-800 dark:from-ink-900 dark:to-ink-950"
                >
                  <div className="bg-gradient-to-br from-brand-600 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11.5px] font-medium text-ink-500 dark:text-ink-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutOrganiser;

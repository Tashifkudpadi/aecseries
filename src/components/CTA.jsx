import { motion } from "framer-motion";
import { fadeUp, fadeUpItem, stagger, VIEWPORT } from "../lib/motion";

function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 px-8 py-16 text-center text-white sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.14),transparent_40%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]"
          />

          <motion.div
            variants={stagger(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="relative mx-auto max-w-3xl"
          >
            <motion.span
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur"
            >
              Riyadh · 2027
            </motion.span>

            <motion.h2
              variants={fadeUpItem}
              className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
            >
              Be part of Saudi Arabia’s Enterprise Agentic AI Moment.
            </motion.h2>

            <motion.p
              variants={fadeUpItem}
              className="mt-5 text-balance text-lg leading-relaxed text-white/85"
            >
              Join enterprise and government leaders shaping the autonomous
              enterprise — from Agentic AI and data foundations to cloud and
              cybersecurity.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="#"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-ink-50"
              >
                Register Now
              </a>
              <a
                href="#"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Become a Sponsor →
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;

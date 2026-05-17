import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/capstoneLogoblack.png";
import { useTheme } from "../hooks/useTheme";

const links = [
  { label: "Home", href: "#home" },
  { label: "Why Attend", href: "#why" },
  { label: "Topics", href: "#topics" },
  { label: "Agenda", href: "#agenda" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [theme, toggleTheme] = useTheme("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[1180px] -translate-x-1/2"
    >
      <div
        className={`flex items-center justify-between gap-4 rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all ${
          scrolled
            ? "border-ink-200/80 bg-white/85 shadow-[0_12px_36px_rgba(15,23,42,0.1)] dark:border-ink-800/80 dark:bg-ink-900/85"
            : "border-ink-200/60 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:border-ink-800/60 dark:bg-ink-900/70"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-ink-900 dark:text-ink-50"
        >
          <img
            src={Logo}
            alt="logo"
            width="140px"
            style={{ borderRadius: "18px" }}
            // className="bg-[#2563eb]"
          />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-ink-100 bg-ink-50 p-1 dark:border-ink-800 dark:bg-ink-900 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                active === l.href
                  ? "bg-white text-ink-900 shadow-sm dark:bg-ink-800 dark:text-ink-50"
                  : "text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-50"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_12px_28px_rgba(37,99,235,0.35)] sm:inline-flex"
          >
            Register
          </a>

          {/* <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:rotate-12 hover:border-brand-500 hover:text-brand-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300 dark:hover:text-brand-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button> */}

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-ink-200 bg-white p-3 shadow-xl dark:border-ink-800 dark:bg-ink-900 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Register
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

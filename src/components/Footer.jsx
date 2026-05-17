import Logo from "../assets/logo.png";

const columns = [
  {
    title: "Conference",
    links: ["Why Attend", "Agenda", "Speakers", "Venue", "FAQs"],
  },
  // {
  //   title: "Topics",
  //   links: [
  //     "Agentic AI",
  //     "Data Governance",
  //     "Cloud Modernization",
  //     "Cybersecurity",
  //     "AI in ERP & CRM",
  //   ],
  // },
  // {
  //   title: "Connect",
  //   links: ["Sponsor", "Press", "Partners", "Contact", "Newsletter"],
  // },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-ink-200 pb-12 dark:border-ink-800 md:grid-cols-[1.4fr_repeat(2,1fr)]">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-bold text-ink-900"
            >
              <img
                src={Logo}
                alt="logo"
                width="240px"
                style={{ borderRadius: "18px" }}
              />
            </a>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">
              From Data to Action — the Autonomous Enterprise Conference 2027,
              Riyadh.
            </p>
            <div className="mt-5 flex gap-2">
              {["linkedin"].map((s) => (
                <a
                  key={s}
                  href="https://www.linkedin.com/company/capstonemena/posts/?feedView=all"
                  aria-label={s}
                  target="_blank"
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-white text-ink-500 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400 dark:hover:border-brand-500 dark:hover:text-brand-400"
                >
                  {/* {s === "twitter" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.13 4.13 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.86a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.55a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22 5.92z" />
                    </svg>
                  )} */}
                  {s === "linkedin" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  )}
                  {/* {s === "youtube" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.6 4 12 4 12 4s-7.6 0-9.4.4A3 3 0 0 0 .5 6.5 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.4 20 12 20 12 20s7.6 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.5zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
                    </svg>
                  )} */}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide text-ink-900 dark:text-ink-50">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14.5px] text-ink-500 transition hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            © {new Date().getFullYear()} Autonomous Enterprise Conference,
            Riyadh. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-ink-500 dark:text-ink-400">
            <a
              href="#"
              className="transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              Terms
            </a>
            <a
              href="#"
              className="transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

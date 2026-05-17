// Shared motion config — keep variants here so the whole site
// uses the same easing, timing and viewport thresholds. Avoids
// `filter: blur` (GPU repaint snap) and nested whileInView conflicts.

export const EASE = [0.22, 1, 0.36, 1]; // smooth out-expo

export const VIEWPORT = { once: true, amount: 0.15 };

// Section header / large block fade
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.06 },
  }),
};

// Card / list item — slightly shorter for grids
export const fadeUpItem = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.05 },
  }),
};

// Paragraph — opacity + y only, NO blur (blur causes a post-animation snap)
export const paragraph = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.1 },
  }),
};

// Container with stagger — children inherit `hidden`/`show`
export const stagger = (childrenDelay = 0.08, startDelay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: childrenDelay,
      delayChildren: startDelay,
    },
  },
});

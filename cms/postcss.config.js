// Intentionally empty. This is a "barrier" config so that the Strapi (Vite)
// admin build does NOT walk up to the repo-root postcss.config.js, which
// requires `tailwindcss` (a frontend-only dependency not installed here).
// Without this file, cloud builds fail with "Cannot find module 'tailwindcss'".
module.exports = {};

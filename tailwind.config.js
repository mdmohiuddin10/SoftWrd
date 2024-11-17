/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Scan all Svelte and other relevant files
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', // Include Flowbite Svelte components
  ],
  theme: {
    extend: {}, // Add customizations here if needed
  },
  plugins: [
    require('flowbite/plugin') // Add Flowbite as a plugin
  ],
};

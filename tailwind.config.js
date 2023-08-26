/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      zIndex: {
        99: "99",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

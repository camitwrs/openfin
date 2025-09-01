/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        azulsecundario: "#3D82EB",
        azulprincipal: "#0c4a6e",
        azulatencion: "#2563eb",
      },
    },
  },
  plugins: [],
};

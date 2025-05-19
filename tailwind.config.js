// tailwind.config.js
module.exports = {
  darkMode: 'class', // ou 'media' se quiser baseado nas configurações do sistema
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Inclua se estiver usando App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

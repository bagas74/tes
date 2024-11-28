/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Arahkan ke semua file React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954", // Warna hijau khas Spotify
        secondary: "#191414", // Warna hitam Spotify
      },
    }, // Tempat untuk menambahkan kustomisasi tema
  },
  plugins: [require("@tailwindcss/forms")],
};

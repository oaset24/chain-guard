/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1C1C1C",        // Hintergrund (Malchut – Anthrazit)
        light: "#FDFDFB",       // Schrift hell (Keter – Elfenbeinweiß)
        primary: "#4A6FA5",     // Technologie (Yesod – Stahlblau)
        secondary: "#C9A227",   // Vision (Keter – Gold)
        accent: "#E07A5F",      // Business/Netzach – Burnt Orange
        success: "#90EE90",     // Community/Chesed – Hellgrün
        warning: "#FFD700",     // Tiferet – Goldgelb
        danger: "#B22222",      // Gevura – Dunkelrot
        violet: "#BBA0CA",      // Hod – Kommunikation
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--blur-intensity))',
          '-webkit-backdrop-filter': 'blur(var(--blur-intensity))',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--glass-shadow)',
        },
        '.glass-card': {
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--blur-intensity))',
          '-webkit-backdrop-filter': 'blur(var(--blur-intensity))',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--glass-shadow)',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

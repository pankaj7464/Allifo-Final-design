/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "slate-500",
        "light-bg": "#f8fafc",
        "primary-light": "#1e293b",
        green: "#22C55E",
        secondary: "#2563eb",
        yellow: "#facc15",
        border: "#1e293bcc",
        "border-light": "#d4d7dacc",
        "text-primary": "#d1d5db",
        "text-secondary": "#e2e8f0",
        red: "#dc2626",
        twitterColor: "#1da1f2",
        linkedinColor: "#0077b5",
        instaColor: "#e1306c",
        discordColor: "#7289da",
        darkBlue:"#27005D"
      },
    },
  },
  plugins: [],
};

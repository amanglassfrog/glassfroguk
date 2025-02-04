/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(gray|indigo|white|black|red|green|blue|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'group-hover'],
    },
    'bg-[#f76c6c]',
    'bg-[#f3f8fc]',
    'bg-[#060f3c]',
    'hover:bg-[#f55c5c]',
    'hover:text-[#f76c6c]',
    'text-[#f55c5c]',
    'text-red-800',
    'opacity-0',
    'opacity-100',
    'group-hover:opacity-100',
    'group-hover:scale-105',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'media',
} 
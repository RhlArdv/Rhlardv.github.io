import type { Config } from "tailwindcss";

const config: Config = {
    // Tailwind v4: darkMode dikonfigurasi di globals.css dengan @theme, bukan di sini
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./data/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B1120",
            },
        },
    },
    plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '480px',    // Extra small devices
            'sm': '640px',    // Small devices
            'md': '768px',    // Medium devices
            'lg': '1024px',   // Large devices
            'xl': '1280px',   // Extra large devices
            '2xl': '1536px',  // 2X large devices
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bgDark: "#121212",
                textPara: "#57556C",
                heading: "#3182CE",
                textWhite: "#FAF7F2",
                textLight: "#9ca3af",
                darkHover: "#18191E",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
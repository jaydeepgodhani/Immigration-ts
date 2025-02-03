/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        fontFamily: {
            sans: ['IBM Plex Sans', '-apple-system'],
            serif: ['IBM Plex Sans', 'serif'],
            mono: ['monospace'],
            heading: ['Merriweather'],
        },
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            animation: {
                fade: "fadeIn 1s ease-in-out forwards",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: "rgb(var(--color-primary))",
                secondary: "rgb(var(--color-secondary))",
                link: "rgb(var(--color-link))",
                "link-contrast": "rgb(var(--color-link-contrast))",
                "code-bg": "rgb(var(--color-code-bg))",
                "quote-bg": "rgb(var(--color-quote-bg))",
                bg: "rgb(var(--color-bg))",
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
}

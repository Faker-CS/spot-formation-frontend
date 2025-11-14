/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            colors: {
                // Neutral
                black: "#1d1d1d",

                // Primary brand colors
                primary: {
                    DEFAULT: "#1B365E",   // main
                    accent: "#40BFDE",    // light blue
                    highlight: "#FFBC42", // yellow
                },

                // Secondary palette
                secondary: {
                    red: "#FF5757",
                    orangeStart: "#FFBC41",
                    orangeEnd: "#FF5758",
                    green: "#B6C93E",
                    fiiusha: "#A36490",
                    darkGreen: "#1B515E",
                },

                // Background colors
                background: {
                    lightBlue: "#C7F8FF",
                    lightYellow: "#FFE4B4",
                    lightGray01: "#D9D9D9",
                },

                // Grays
                gray: {
                    1: "#ABABAB",
                },

                // Text colors
                text: {
                    DEFAULT: "#0b2b3a",
                    onDark: "#ffffff",
                },
            },

            fontFamily: {
                redhat: ['"Red Hat Display"', 'system-ui', 'sans-serif'],
                lato: ['Lato', 'system-ui', 'sans-serif'],
            },

            letterSpacing: {
                'percent-2': '0.02em',
            },

            boxShadow: {
                'shadow-over-01': '0 4px 10px rgba(3, 9, 22, 0.06)',
                'encart': '0 12px 30px rgba(3, 9, 22, 0.10)',
                'xs': '0 1px 2px rgba(4, 9, 20, 0.06)',
                'sm': '0 6px 18px rgba(4, 9, 20, 0.08)',
                'md': '0 12px 36px rgba(4, 9, 20, 0.12)',
                'lg': '0 24px 64px rgba(4, 9, 20, 0.18)',
                'glow-primary': '0 8px 28px rgba(255, 106, 0, 0.14)',
            },

            borderRadius: {
                'sm': '8px',
                'md': '12px',
                'lg': '20px',
            },

            transitionDuration: {
                'fast': '120ms',
                'medium': '220ms',
                'slow': '360ms',
            },
        },
    },
    plugins: [],
}

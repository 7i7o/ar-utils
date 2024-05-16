/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ['"Ubuntu Sans"', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                white: '0 0px 3px rgba(255, 255, 255, 1)',
                blue: '0 0px 3px rgba(30, 64, 175, 1)',
            },
        },
    },
    plugins: [],
};

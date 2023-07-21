/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/footer*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/header*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            black: '#090C08',
            grey: '#848484ff',
            white: '#E2E8F0',
            blue: '#90b5f5ff',
            red: '#d44d5cff',
            black_grey: '#171717',
        },
    },
    plugins: [],
}

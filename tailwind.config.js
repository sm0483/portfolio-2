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
            black: '#0b0020',
            grey: '#6C6F7F',
            white: '#F4EDFF',
            blue: '#DECDFF',
            red: '#ebac00',
            black_grey: '#221636',
        },
    },
    plugins: [],
}

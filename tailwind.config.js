/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // backgroundImage: {
            //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //     'gradient-conic':
            //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // },
        },
        screens: {
            phone: { min: '100px', max: '639px' },
            // => @media (min-width: 100px and max-width: 767px) { ... }

            tablet: { min: '640px', max: '1023px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            laptop: { min: '1024px', max: '1279px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            desktop: { min: '1280px', max: '1535px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': { min: '1536px' },
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};

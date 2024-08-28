// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            gradientColorStops: {
                'primary': '#6ee7b7',
                'secondary': '#3b82f6',
                'dark': '#1C1C1C',
                'light': '#F5F5F5',
            },
            keyframes: {
                'fadeIn': {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                'slideIn': {
                    '0%': {transform: 'translateY(20px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
                'scaleUp': {
                    '0%': {transform: 'scale(0.9)', opacity: '0.8'},
                    '100%': {transform: 'scale(1)', opacity: '1'},
                },
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-in': 'slideIn 1s ease-in-out',
                'scale-up': 'scaleUp 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
};

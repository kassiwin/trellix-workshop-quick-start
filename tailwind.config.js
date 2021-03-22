module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'lato': ['Lato', 'sans-serif'],
            'Inter': ['Inter', 'sans-serif']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
                light: '#C3E4FA',
                DEFAULT: '#84CEFF',
                dark: '#009eeb',
            },
            green:{
                DEFAULT: '#A1FF8A'
            },
            yellow: {
                light: '',
                DEFAULT: '#F1FF77',
                dark: '',
            },
            black: {
                darkest: '#000',
                dark: '#1e2232',
                DEFAULT: '#0B0F21',
                light: '#2D3445',
                lightest: '#3c4858',
            },
            white: {
                DEFAULT: '#fff'
            },
            gray: {
                DEFAULT: '#9799A4'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

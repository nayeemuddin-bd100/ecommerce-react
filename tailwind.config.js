module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#88883',
                },
                textColor: '#EFEFEF',
                navBg: '#333333',
                outletBg: '#f4f7ff ',
            },
            fontFamily: {
                body: ['Nunito'],
                osygen: ['Oxygen', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {
            translate: ['group-hover'],
            display: ['group-hover', 'hover'],
            transitionProperty: ['group-hover', 'hover'],
            padding: ['hover'],
            transitionDuration: ['group-hover', 'hover'],
        },
    },
    plugins: [],
};

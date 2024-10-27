module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-pink': 'rgb(255, 0, 190)',
            },
            textColor: {
                'pink': 'rgb(255, 0, 190)',
            },
            fontFamily: {
                'inspiration': ['Inspiration', 'cursive'],
            },
        },
    },
    plugins: [],
}
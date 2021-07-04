module.exports = {

    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
    theme: {
        darkSelector: '.dark-mode',
        extend: {},
    },
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
    },
    plugins: [
        require('tailwindcss-dark-mode')()
    ],
}
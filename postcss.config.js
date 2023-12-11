const tailwindcss = require('tailwindcss');

module.exports = {
    plugings: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}
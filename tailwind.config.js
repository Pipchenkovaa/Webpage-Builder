/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/**/*.html',
		'./src/**/*.js'
	],
  theme: {
    extend: {
			colors: {
				blue: '#395a63',
				darkBlue: '#1c2e35',
				light: '#fafafa',
				newYellow: '#dcc200'
			},
		},
  },
  plugins: [],
}


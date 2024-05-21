/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			fontFamily: {
				jersey: ["Jersey 10 Charted", 'sans-serif'],
				tac: ["Tac One", 'sans-serif'],
				'jer-15':["Jersey 15 Charted", "sans-serif"],
				'permanent-marker':["Permanent Marker", 'cursive'],
				danfo: ["Danfo", 'serif']
			}
		},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#fb923c',

					secondary: '#4ade80',

					accent: '#d1d5db',

					neutral: '#292524',

					'base-100': '#1c1917',

					info: '#22d3ee',

					success: '#4ade80',

					warning: '#fde047',

					error: '#f87171'
				}
			}
		]
	}
};

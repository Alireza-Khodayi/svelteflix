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
					primary: '#f97316',

					secondary: '#fbbf24',

					accent: '#d1d5db',

					neutral: '#374151',

					'base-100': '#111827',

					info: '#22d3ee',

					success: '#4ade80',

					warning: '#fde047',

					error: '#f87171'
				}
			}
		]
	}
};

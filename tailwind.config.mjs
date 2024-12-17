/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			formBg: 'hsl(0, 0%, 100%)', 
			customGreen: 'hsl(148, 38%, 91%)',
			customAnotherGreen: 'hsl(169, 82%, 27%)',
			customTheGreen: 'hsl(186, 15%, 59%)',
			customDarkGreen: 'hsl(187, 24%, 22%)',
			errorMessage: 'hsl(0, 66%, 54%)',
		},
	},
	plugins: [],
}

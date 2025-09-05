import type { Config } from 'tailwindcss'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./features/**/*.{js,ts,jsx,tsx,mdx}',
		'./hooks/**/*.{js,ts,jsx,tsx,mdx}',
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xsm: '550px',
				sm: '600px',
				md: '690px',
				lg: '988px',
				xl: '1078px',
				xxl: '1265px',
			},
			colors: {
				textGray: '#71767b',
				textGrayLight: '#e7e9ea',
				borderGray: '#2f3336',
				inputGray: '#202327',
				iconBlue: '#1d9bf0',
				iconGreen: '#00ba7c',
				iconPink: '#f91880',
			},
			borderRadius: {
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			boxShadow: {
				card: '0 4px 12px rgba(0, 0, 0, 0.08)',
			},
		},
	},
	plugins: [],
} satisfies Config

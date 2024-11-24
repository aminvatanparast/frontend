import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				customPrimary: {
					300: '#15B392',
					400: '#54C392',
					500: '#1160F0',
					900: '#1C1E53',
				},
				customGray: {
					100: '#C6C6C6' ,
					200: '#1A1A1BA8' ,
					300: '#616164A8' ,
					400: '#F3F2F7' ,
					500: '#FCFCFC' ,
					700: '#565656' ,
					800: '#999999' ,
					900: '#232426' ,
				},
				home: '#F9F7F4',
				customSecondary: {
					100: '#FCFCFC',
					200: '#777777',
					300: '#B3B3B3',
					400: '#3A3A3A',
					500: '#656565',
					600: '#2A2A2B',
					700: '#C6C6C6',
					800: '#464646A8',
				},
			},
			fontSize: {
				"3xl": ['28px', '34px'],
			}
		},
	},
	plugins: [],
}
export default config

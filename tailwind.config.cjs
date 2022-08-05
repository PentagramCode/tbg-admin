module.exports = {
	content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: '#7380ec',
				danger: '#ff7782',
				success: '#41f1b6',
				warning: '#ffbb55',
				white: 'var(--color-white)',
				'info-dark': '#7d8da1',
				'info-light': '#dce1eb',
				dark: 'var(--color-dark)',
				light: 'var(--color-light)',
				'primary-variant': '#111e88',
				'dark-variant': 'var(--color-dark-variant)',
				background: 'var(--color-background)',
			},
			fontSize: {
				'11px': '0.6875rem',
				'19.2px': '1.2rem',
				'28.8px': '1.8rem',
				'22.4px': '1.4rem',
				'25.6px': '1.6rem',
				'32px': '2rem',
				'13.92px': '0.87rem',
				'12.8px': '0.8rem',
				'12.32px': '0.77rem',
			},
			width: {
				'6px': '0.375rem',
				'44.8px': '2.8rem',
				'67.2px': '4.2rem',
				'70.4px': '4.4rem',
				'73.6px': '4.6rem',
				'89.6px': '5.6rem',
				94: '94%',
				96: '96%',
			},
			height: {
				'25.6px': '1.6rem',
				'44.8px': '2.8rem',
				'54.4px': '3.4rem',
				'59.2px': '3.7rem',
				'73.6px': '4.6rem',
				'86vh': '86vh',
			},
			gap: {
				'12.8px': '0.8rem',
				'28.8px': '1.8rem',
			},
			gridTemplateColumns: {
				'container-app': '14rem auto 23rem',
				'container-app-xl': '7rem auto 23rem',
				'container-app-md': '1fr',
			},
			margin: {
				'22.4px': '1.4rem',
				'28.8px': '1.8rem',
			},
			padding: {
				'2px': '0.125rem',
				'10px': '0.625rem',
				'12.8px': '0.8rem',
				'28.8px': '1.8rem',
			},
			transitionProperty: {
				'sidebar-link': 'all ease 300ms',
			},
			borderRadius: {
				'border-radius-1': '0.4rem',
				'border-radius-2': '0.8rem',
				'border-radius-3': '1.2rem',
				50: '50%',
			},
			zIndex: {
				2: '2',
				3: '3',
			},
			boxShadow: {
				aside: '1rem 3rem 4rem var(--color-light)',
				right: '0 1rem 1rem var(--color-light)',
			},
			animation: {
				'aside-menu': 'showMenu 400ms ease-in-out',
			},
			keyframes: {
				'showMenu': {
					to: { left: '0' },
				},
			},
			spacing: {
				66: '66%',
			},
			screens: {
				sm: '640px',
				md: { max: '768px' },
				lg: '1024px',
				xl: { max: '1200px', min: '769px' },
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};

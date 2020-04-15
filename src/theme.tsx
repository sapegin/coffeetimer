const baseFont = [
	// Safari for macOS and iOS (San Francisco)
	'-apple-system',
	// Chrome on macOS (San Francisco)
	'BlinkMacSystemFont',
	// Windows
	'"Segoe UI"',
	// Android
	'Roboto',
	// Basic web fallback
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
	// Emoji fonts
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
].join(', ');
const space = {
	xxs: '0.125rem', // 2px
	xs: '0.25rem', // 4px
	s: '0.5rem', // 8px
	m: '1rem', // 16px
	l: '2rem', // 32px
	xl: '4rem', // 64px
	xxl: '8rem', // 128px
	xxxl: '16rem', // 256px
};
const breakpoints = [
	'32rem', // 512px
	'48rem', // 768px
	'62rem', // 992px
	'75rem', // 1200px
];
const fonts = {
	base: baseFont,
	heading: baseFont,
};
const fontSizes = {
	base: '1rem',
	xxxxl: '4.2rem',
	xxxl: '3.2rem',
	xxl: '2.4rem',
	xl: '1.8rem',
	l: '1.3rem',
	m: '1rem',
	s: '0.85rem',
	xs: '0.75rem',
};
const colors = {
	bg: '#fff',
	base: '#333',
	light: '#767676',
	border: '#ccc',
	primary: '#9564a2',
	focus: 'hsla(285, 40%, 62%, 0.5)',
	hover: '#9b56ae',
	selection: 'rgb(255,237,117)',
	selectionAlpha: 'rgba(255,237,117,0.25)',
};
const fontWeights = {
	base: 400,
	heading: 300,
	bold: 800,
};
const lineHeights = {
	base: 1.5,
	heading: 1.1,
	pre: 1.3,
};
const letterSpacings = {
	base: 0,
	heading: 0,
};
const boxShadows = {
	focus: `0 0 0 3px ${colors.focus}`,
};
const textBaseStyles = {
	color: 'base',
	fontFamily: 'base',
	fontWeight: 'base',
	lineHeight: 'base',
	letterSpacing: 'base',
};

export default {
	// Base font size (applied to body)
	baseFontSize: '1em', // 1em = 16px
	blockMarginBottom: space.m,
	headingMarginTop: space.l,
	listMargin: '1.3em',
	page: {
		// Max page with
		maxWidth: null,

		// Body paddings
		xPadding: space.m,
		yPadding: 0,

		// Max content width (<Container>)
		contentMaxWidth: '32rem',

		// Max text column width (<TextContainer>)
		textMaxWidth: '32rem',
	},
	fonts,
	space,
	fontSizes,
	fontWeights,
	lineHeights,
	letterSpacings,
	colors,
	boxShadows,
	breakpoints,
	headingStyles: {
		1: {
			color: 'base',
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontSize: fontSizes.l,
		},
	},
	textStyles: {
		base: {
			...textBaseStyles,
		},
		timer: {
			...textBaseStyles,
			fontSize: fontSizes.xl,
		},
		light: {
			...textBaseStyles,
			fontSize: fontSizes.s,
			color: colors.light,
		},
	},
} as const;

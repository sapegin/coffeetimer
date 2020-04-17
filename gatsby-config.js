module.exports = {
	siteMetadata: {
		title: 'Coffee Timer',
		description: 'Basic pour over coffee timer',
		lang: 'en',
		url: 'https://coffee.morning.photos',
		twitter: '@iamsapegin',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-typescript',
		'gatsby-plugin-netlify',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Coffee Timer',
				short_name: 'Coffee Timer',
				background_color: '#fff',
				theme_color: '#b279c5',
				orientation: 'portrait',
				display: 'standalone',
				start_url: '/',
				icon: 'static/icon.png',
				include_favicon: false,
			},
		},
		'gatsby-plugin-offline',
	],
};

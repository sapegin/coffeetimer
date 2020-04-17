exports.webpack = function(config) {
	// Disable source maps
	config.devtool = false;
};

exports.babel = function(config) {
	// Configure server-side rendering for styled-components
	config.plugins.push([
		'styled-components',
		{ ssr: true, displayName: true, preprocess: false },
	]);
};

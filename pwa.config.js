exports.babel = function(config) {
	config.plugins.push([
		'styled-components',
		{ ssr: true, displayName: true, preprocess: false },
	]);
};

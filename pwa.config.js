exports.babel = function (config) {
	config.plugins.push(
		['babel-plugin-styled-components', {
			pure: true,
		}]
	);
}

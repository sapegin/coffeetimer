exports.babel = function (config) {
	config.plugins.push(
		['babel-plugin-styled-components', {
			transpileTemplateLiterals: true,
			pure: true,
		}]
	);
}

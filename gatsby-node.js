const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	// Turn off source maps
	actions.setWebpackConfig({ devtool: false });
};

exports.createPages = ({ actions: { createPage } }) => {
	createPage({
		path: '/',
		component: path.resolve(`${__dirname}/src/layouts/Index.tsx`),
	});
};

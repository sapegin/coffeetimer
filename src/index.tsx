import React from 'react';
import ReactDOM from 'react-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { IndexPage } from './pages/index';

if (process.env.NODE_ENV === 'production') {
	const sheet = new ServerStyleSheet();

	ReactDOM.hydrate(
		[
			<StyleSheetManager sheet={ sheet.instance }>
				<IndexPage/>
			</StyleSheetManager>,
			React.createElement(() => sheet.getStyleElement())
		],
		document.getElementById('app'),
	);

	// Service Worker registration
	// if ('serviceWorker' in navigator) {
	// 	navigator.serviceWorker.register('/sw.js');
	// }
} else {
	ReactDOM.render(<IndexPage />, document.getElementById('app'));
}
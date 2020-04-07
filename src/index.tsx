import React from 'react';
import ReactDOM from 'react-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { IndexPage } from './pages/index';

if (process.env.NODE_ENV === 'production') {
	const sheet = new ServerStyleSheet();

	ReactDOM.hydrate(
		<StyleSheetManager sheet={ sheet.instance }>
			<IndexPage/>
		</StyleSheetManager>,
		document.getElementById('app'),
		() => {
			document.head.innerHTML += sheet.getStyleTags();
			sheet.seal();
		}
	);

	// Service Worker registration
	// if ('serviceWorker' in navigator) {
	// 	navigator.serviceWorker.register('/sw.js');
	// }
} else {
	ReactDOM.render(<IndexPage />, document.getElementById('app'));
}

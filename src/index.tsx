import React from 'react';
import ReactDOM from 'react-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { IndexPage } from './pages/index';

if (window.PWA_EXPORT) {
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
} else {
	// if (process.env.NODE_ENV === 'production') {
	// 	// Service Worker registration
	// 	if ('serviceWorker' in navigator) {
	// 		navigator.serviceWorker.register('/sw.js');
	// 	}
	// }

	ReactDOM.hydrate(<IndexPage />, document.getElementById('app'));
}

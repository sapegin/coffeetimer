import React from 'react';
import ReactDOM from 'react-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { IndexPage } from './pages/index';

declare global {
	interface Window {
		PWA_EXPORT?: boolean;
	}
}

const container = document.getElementById('app');

if (window.PWA_EXPORT) {
	// Capture critical CSS from styled-components and inline it into the head
	// of the document during PWA build phase

	const sheet = new ServerStyleSheet();

	ReactDOM.hydrate(
		<StyleSheetManager sheet={sheet.instance}>
			<IndexPage />
		</StyleSheetManager>,
		container,
		() => {
			document.head.innerHTML += sheet.getStyleTags();
			sheet.seal();
		}
	);
} else if (process.env.NODE_ENV === 'production') {
	// Register Service Worker
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js');
		});
	}

	ReactDOM.hydrate(<IndexPage />, container);
} else {
	ReactDOM.render(<IndexPage />, container);
}

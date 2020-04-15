import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './Provider';

// Avoid scroll on mobile
const GlobalStyles = createGlobalStyle`
	body {
		min-height: 0;
	}

	/* @reach/dialog */

	/* Used to detect in JavaScript if apps have loaded styles or not. */
	:root {
		--reach-dialog: 1;
	}

	[data-reach-dialog-overlay] {
		background: hsla(0, 0%, 0%, 0.33);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
	}

	[data-reach-dialog-content] {
		max-width: calc(${p => p.theme.page.contentMaxWidth} + ${p => p.theme.space.l});
		width: 100vw;
		margin: 10vh auto;
		background: white;
		padding: ${p => p.theme.space.m};
		padding-top: 0;
		outline: none;

		@media (max-width: ${p => p.theme.breakpoints[0]}) {
			height: 100vh;
			margin: 0;
		}
	}
`;

export const App: React.FC = ({ children }) => (
	<Provider>
		<GlobalStyles />
		<Head>
			<title>Coffee Timer</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>"
			/>
			<link rel="apple-touch-icon" href="/icon.png" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="theme-color" content="#9564a2" />
			<meta name="description" content="Basic timer for pour over coffee" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Coffee Timer" />
			<meta name="twitter:creator" content="@iamsapegin" />
		</Head>
		{children}
	</Provider>
);

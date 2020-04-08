import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './Provider';

// Avoid scroll on mobile
const GlobalStyles = createGlobalStyle`
	body {
		min-height: 0;
	}
`;

export const App: React.FC = ({ children }) => (
	<Provider>
		<GlobalStyles />
		<Head>
			<title>Coffee timer</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>"
			/>
			<link rel="apple-touch-icon" href="/icon.png" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="theme-color" content="#b279c5" />
			<meta name="description" content="Basic coffee timer" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Coffee timer" />
			<meta name="twitter:creator" content="@iamsapegin" />
		</Head>
		{children}
	</Provider>
);

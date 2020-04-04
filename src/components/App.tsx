import React from 'react';
import Head from 'next/head';
import { Provider } from './Provider';

export const App: React.FC = ({ children }) => (
	<Provider>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="shortcut icon"
				type="image/x-icon"
				href="/static/favicon.png"
			/>
		</Head>
		{children}
	</Provider>
);

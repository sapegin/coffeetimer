import React from 'react';
import Head from 'next/head';
import { Provider } from './Provider';

export const App: React.FC = ({ children }) => (
	<Provider>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>"
			/>
		</Head>
		{children}
	</Provider>
);

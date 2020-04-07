import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './Provider';

// Avoid scroll on mobile
const GlobalStyles = createGlobalStyle`
	body {
		min-height: 0;
		overflow: hidden;
	}
`;

export const App: React.FC = ({ children }) => (
	<Provider>
		<GlobalStyles />
		{children}
	</Provider>
);

import React from 'react';
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
		max-width: ${p => p.theme.page.contentMaxWidth};
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
		{children}
	</Provider>
);

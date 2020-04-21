import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TamiaRoot } from 'tamia';
import theme from '../theme';

type Props = {
	children: React.ReactNode;
};

const GlobalStyles = createGlobalStyle`
	body {
		/* Avoid scroll on mobile */
		min-height: 0;
	}

	/* react-responsive-modal */

	.react-responsive-modal-overlay {
		background: hsla(0, 0%, 0%, 0.33);
		display: flex;
		align-items: flex-start;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0;
		overflow-y: auto;
		overflow-x: hidden;
		z-index: 1000;
	}


	.react-responsive-modal-modal {
		max-width: ${p => p.theme.page.contentMaxWidth};
		position: relative;
		margin: 0 auto;
		padding: ${p => p.theme.space.m};
		padding-top: 0;
		background: ${p => p.theme.colors.bg};

		@media (max-width: ${p => p.theme.breakpoints[0]}) {
			height: 100vh;
			margin: 0;
		}
	}

	.react-responsive-modal-modalCenter {
		margin: auto;
	}

	@keyframes react-responsive-modal-fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	@keyframes react-responsive-modal-fadeOut {
		0% { opacity: 1; }
		100% { opacity: 0; }
	}
`;

export default function Root({ children }: Props) {
	return (
		<TamiaRoot theme={theme}>
			<GlobalStyles />
			{children}
		</TamiaRoot>
	);
}

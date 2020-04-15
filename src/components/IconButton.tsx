import styled from 'styled-components';
import { Box } from 'tamia';

const BUTTON_SIZE = '2.5rem';

export const IconButton = styled(Box).attrs({ as: 'button' })`
	display: flex;
	width: ${BUTTON_SIZE};
	height: ${BUTTON_SIZE};
	margin: -0.4rem;
	align-items: center;
	justify-content: center;
	padding: 0;
	color: ${p => p.theme.colors.primary};
	border: 0;
	border-radius: 50%;
	will-change: opacity;
	transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1),
		background-color 0.2s ease-in-out, color 0.2s ease-in-out;

	&:hover,
	&:active {
		background-color: ${p => p.theme.colors.hover};
		color: ${p => p.theme.colors.bg};
		cursor: pointer;
	}
	&:focus {
		outline: 0;
		box-shadow: ${p => p.theme.boxShadows.focus};
	}
`;

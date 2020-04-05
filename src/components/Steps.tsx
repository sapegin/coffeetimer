import styled from 'styled-components';

export const Steps = styled.ol`
	counter-reset: steps-counter;
	list-style: none;
	padding: 0;
`;

export const Step = styled.li`
	counter-increment: steps-counter;
	padding: 0;

	&::before {
		content: counter(steps-counter);
		display: inline-block;
		min-width: 1rem;
		color: ${p => p.theme.colors.primary};
		font-weight: ${p => p.theme.fontWeights.bold};
	}
`;

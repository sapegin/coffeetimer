import styled from 'styled-components';

export const Steps = styled.ol`
	counter-reset: steps-counter;
	list-style: none;
	padding: 0;
`;

export const Step = styled.li`
	counter-increment: steps-counter;
	position: relative;
	padding: 0 0 0 1rem;

	&::before {
		content: counter(steps-counter);
		position: absolute;
		left: 0;
		color: ${p => p.theme.colors.primary};
		font-weight: ${p => p.theme.fontWeights.bold};
	}
`;

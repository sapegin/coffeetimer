import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'tamia';
import { CircularProgress } from './CircularProgress';
import { Time } from './Time';
import { Icon } from './Icon';

const BUTTON_SIZE = '8rem';
const BUTTON_HALF_SIZE = '3rem';

type Status = 'paused' | 'running';

interface TheButtonProps {
	status: Status;
	duration: number;
	elapsed: number;
	onStart: () => void;
	onReset: () => void;
}

const StartButton = styled(Box)`
	width: 100%;
	height: 100%;
	padding: 0;
	background-color: ${p => p.theme.colors.primary};
	border: 0;
	border-radius: 50%;
	color: ${p => p.theme.colors.bg};
	will-change: opacity;
	transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1),
		background-color 0.2s ease-in-out;

	&:hover,
	&:active {
		background-color: ${p => p.theme.colors.hover};
		cursor: pointer;
	}
	&:focus {
		outline: 0;
		box-shadow: ${p => p.theme.boxShadows.focus};
	}
`;

const ResetButton = styled(Box)`
	width: ${BUTTON_HALF_SIZE};
	height: ${BUTTON_HALF_SIZE};
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

export const TheButton = ({
	status,
	duration,
	elapsed,
	onStart,
	onReset,
}: TheButtonProps) => (
	<Box width={BUTTON_SIZE} height={BUTTON_SIZE} position="relative">
		<Box position="absolute" top={0} left={0} bottom={0} right={0} zIndex={-1}>
			<CircularProgress
				minValue={0}
				maxValue={duration}
				value={duration - elapsed}
			/>
		</Box>
		<Flex
			position="absolute"
			top={0}
			left={0}
			bottom={0}
			right={0}
			zIndex={-1}
			justifyContent="center"
			alignItems="center"
		>
			<Time value={duration - elapsed} />
		</Flex>
		<StartButton
			as="button"
			type="button"
			onClick={onStart}
			aria-label="Start timer"
			disabled={status === 'running'}
			opacity={status === 'running' ? 0 : 1}
		>
			<Box position="relative" left="0.2rem">
				<Icon icon="play" size={64} />
			</Box>
		</StartButton>
		<Flex
			position="absolute"
			top={0}
			bottom={0}
			right="-4rem"
			alignItems="center"
		>
			<ResetButton
				as="button"
				type="button"
				onClick={onReset}
				aria-label="Rest timer"
				disabled={status !== 'running'}
				opacity={status === 'running' ? 1 : 0}
			>
				<Icon icon="reset" size={28} />
			</ResetButton>
		</Flex>
	</Box>
);

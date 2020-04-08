import React from 'react';
import styled, { css } from 'styled-components';

interface SliderProps {
	min: number;
	max: number;
	step: number;
	value: number;
	disabled: boolean;
	onChange: (value: number) => void;
}

const TRACK_SIZE = '0.4rem';
const THUMB_SIZE = '1.2rem';

const thumbStyles = css`
	width: ${THUMB_SIZE};
	height: ${THUMB_SIZE};
	cursor: pointer;
	border-radius: 50%;
	border: 0.2rem solid ${p => p.theme.colors.primary};
	background-color: ${p => p.theme.colors.bg};
`;

const thumbFocusStyles = css`
	box-shadow: ${p => p.theme.boxShadows.focus};
`;

const trackStyles = css`
	width: 100%;
	height: ${TRACK_SIZE};
	border-radius: 0.15rem;
	background-color: ${p => p.theme.colors.primary};
`;

const Input = styled.input`
	width: 100%;
	margin: 0;
	-webkit-appearance: none;
	transition: opacity 0.2s ease-in-out;
	&[disabled] {
		opacity: 0.5;
	}
	&:focus {
		outline: 0;
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		margin-top: -${TRACK_SIZE};
		${thumbStyles};
	}
	&:focus::-webkit-slider-thumb {
		${thumbFocusStyles};
	}
	&::-moz-range-thumb {
		${thumbStyles};
	}
	&:focus::-moz-range-thumb {
		${thumbFocusStyles};
	}
	&::-ms-thumb {
		${thumbStyles};
	}
	&:focus::-ms-thumb {
		${thumbFocusStyles};
	}
	&::-webkit-slider-runnable-track {
		${trackStyles};
	}
	&::-moz-range-track {
		${trackStyles};
	}
	&::-ms-track {
		${trackStyles};
	}
`;

export function Slider({ onChange, ...props }: SliderProps) {
	return (
		<Input
			{...props}
			type="range"
			onChange={event => onChange(Number(event.target.value))}
		/>
	);
}

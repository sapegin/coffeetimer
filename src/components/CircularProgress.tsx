// Based on https://github.com/kevinsqi/react-circular-progressbar

import React from 'react';
import styled from 'styled-components';

const VIEWBOX_SIZE = 100;
const STROKE_WIDTH = 6;
const CIRCLE_RATIO = 1;

interface CircularProgressProps {
	value: number;
	minValue: number;
	maxValue: number;
}

function getDashStyle({
	dashRatio,
	radius,
}: {
	dashRatio: number;
	radius: number;
}) {
	const diameter = Math.PI * 2 * radius;
	const gapLength = (1 - dashRatio) * diameter;

	return {
		// Have dash be full diameter, and gap be full diameter
		strokeDasharray: `${diameter}px ${diameter}px`,
		// Shift dash backward by gapLength, so gap starts appearing at correct distance
		strokeDashoffset: `${gapLength}px`,
	};
}

function getPath(radius: number) {
	// Move to center of canvas
	// Relative move to top canvas
	// Relative arc to bottom of canvas
	// Relative arc to top of canvas
	return `
      M ${VIEWBOX_SIZE / 2},${VIEWBOX_SIZE / 2}
      m 0,-${radius}
      a ${radius},${radius} ${0} 1 1 0,${2 * radius}
      a ${radius},${radius} ${0} 1 1 0,-${2 * radius}
    `;
}

function getPathRadius() {
	// The radius of the path is defined to be in the middle, so for the path to
	// fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
	return VIEWBOX_SIZE / 2 - STROKE_WIDTH / 2;
}

// Ratio of path length to trail length, as a value between 0 and 1
function getPathRatio({ value, minValue, maxValue }: CircularProgressProps) {
	const boundedValue = Math.min(Math.max(value, minValue), maxValue);
	return (boundedValue - minValue) / (maxValue - minValue);
}

interface PathProps {
	dashRatio: number;
	radius: number;
}

const Path = ({ dashRatio, radius, ...rest }: PathProps) => (
	<path
		{...rest}
		style={getDashStyle({ dashRatio, radius })}
		d={getPath(radius)}
		strokeWidth={STROKE_WIDTH}
		fillOpacity={0}
	/>
);

const Image = styled.svg`
	overflow: hidden;
`;

const Trail = styled(Path)`
	stroke: ${p => p.theme.colors.border};
	stroke-linecap: round;
`;

const Progress = styled(Path)`
	stroke: ${p => p.theme.colors.primary};
	transition: stroke-dashoffset 0.5s ease 0s;
`;

export const CircularProgress = ({
	value,
	minValue,
	maxValue,
}: CircularProgressProps) => {
	const radius = getPathRadius();
	const pathRatio = getPathRatio({ value, minValue, maxValue });
	return (
		<Image viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}>
			<Trail dashRatio={CIRCLE_RATIO} radius={radius} />
			<Progress dashRatio={pathRatio * CIRCLE_RATIO} radius={radius} />
		</Image>
	);
};

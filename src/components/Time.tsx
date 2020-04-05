import React from 'react';
import styled from 'styled-components';
import { Text } from 'tamia';

const toTime = (value: number) => value.toString().padStart(2, '0');

const formatTime = (value: number) => {
	const minutes = Math.floor(value / 60);
	const seconds = value % 60;
	return [minutes, seconds].map(toTime).join(':');
};

interface TimeProps {
	value: number;
}

const TimeText = styled(Text)`
	font-feature-settings: 'tnum';
`;

export const Time = ({ value }: TimeProps) => (
	<TimeText variant="timer">{formatTime(value)}</TimeText>
);

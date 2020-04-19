import React from 'react';
import styled from 'styled-components';
import { Text } from 'tamia';

interface IngredientsProps {
	waterAmount: number;
	coffeeAmount: number;
	ratio: number;
}

const Delimiter = styled.span`
	display: inline-block;
	margin: 0 ${p => p.theme.space.xs};
	border-left: 1px solid ${p => p.theme.colors.border};
	height: 1em;
`;

export const Ingredients = ({
	waterAmount,
	coffeeAmount,
	ratio,
}: IngredientsProps) => (
	<Text variant="light" textAlign="center">
		{waterAmount} ml <Delimiter /> 1:{ratio} <Delimiter /> {coffeeAmount} g
	</Text>
);

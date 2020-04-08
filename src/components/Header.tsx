import React from 'react';
import { Flex, Stack, Heading } from 'tamia';

interface HeaderProps {
	title: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
}

export const Header = ({ title, left, right }: HeaderProps) => (
	<Stack gridTemplateColumns="3rem 1fr 3rem">
		<Flex flexDirection="column" justifyContent="center">
			{left}
		</Flex>
		<Flex flexDirection="column" alignItems="center" justifyContent="center">
			<Heading level={1}>{title}</Heading>
		</Flex>
		<Flex flexDirection="column" alignItems="flex-end" justifyContent="center">
			{right}
		</Flex>
	</Stack>
);

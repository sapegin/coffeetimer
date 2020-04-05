import React from 'react';
import { Box, Flex } from 'tamia';
import { Slider } from './Slider';
import { Icon } from './Icon';

export const WaterSlider = (props: React.ComponentProps<typeof Slider>) => (
	<Flex as="label" alignItems="center">
		<Box>
			<Icon icon="eyeClosed" />
		</Box>
		<Box flexGrow={1} mx="s">
			<Slider {...props} aria-label="Water amount" />
		</Box>
		<Box>
			<Icon icon="eyeOpen" />
		</Box>
	</Flex>
);

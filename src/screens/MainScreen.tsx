import React from 'react';
import { StateValue } from 'xstate';
import { Box, Flex } from 'tamia';
import { TheButton } from '../components/TheButton';
import { WaterSlider } from '../components/WaterSlider';
import { Ingredients } from '../components/Ingredients';
import { Steps, Step } from '../components/Steps';

interface Props {
	status: StateValue;
	waterFrom: number;
	waterTo: number;
	waterAmount: number;
	coffeeAmount: number;
	ratio: number;
	timer: number;
	elapsed: number;
	steps: (string | [string, string])[];
	onWaterAmountChange: (value: number) => void;
	onToggle: () => void;
}

export const MainScreen = ({
	status,
	waterFrom,
	waterTo,
	waterAmount,
	coffeeAmount,
	ratio,
	timer,
	elapsed,
	steps,
	onWaterAmountChange,
	onToggle,
}: Props) => {
	return (
		<Flex as="main" flexDirection="column" gap="l">
			<Box>
				<WaterSlider
					min={waterFrom}
					max={waterTo}
					value={waterAmount}
					step={50}
					disabled={status === 'running'}
					onChange={onWaterAmountChange}
				/>
			</Box>
			<Box>
				<Flex justifyContent="center">
					<TheButton
						status={status === 'running' ? 'running' : 'paused'}
						duration={timer}
						elapsed={elapsed}
						onStart={onToggle}
						onReset={onToggle}
					/>
				</Flex>
			</Box>
			<Box>
				<Ingredients
					waterAmount={waterAmount}
					coffeeAmount={coffeeAmount}
					ratio={ratio}
				/>
			</Box>
			<Box>
				<Flex as={Steps} flexDirection="column" gap="s">
					{steps.map((step, index) => (
						<Step key={index}>
							{Array.isArray(step) ? (
								<Flex justifyContent="space-between">
									<Box>{step[0]}</Box>
									<Box ml="s">{step[1]}</Box>
								</Flex>
							) : (
								step
							)}
						</Step>
					))}
				</Flex>
			</Box>
		</Flex>
	);
};

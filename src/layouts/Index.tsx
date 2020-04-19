import React, { useState, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { Box, Container } from 'tamia';
import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { Modal } from '../components/Modal';
import { MainScreen } from '../screens/MainScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useSetting } from '../util/useSetting';
import { timerMachine } from '../machines/timerMachine';
import { recipe } from '../recipes/chemex';
import Base from './Base';

export default function IndexPage() {
	const { waterFrom, waterTo, waterDefault, ratioDefault, brew } = recipe;
	const [
		{
			context: { elapsed },
			value: status,
		},
		send,
	] = useMachine(timerMachine);

	const [isSettingsOpen, setSettingsOpen] = useState(false);
	const [waterAmount, setWaterAmount] = useSetting('waterAmount', waterDefault);
	const [ratio, setRatio] = useSetting('ratio', ratioDefault);

	const { timer, coffeeAmount, steps } = brew({ waterAmount, ratio });

	useEffect(() => {
		send('UPDATE_WATER_AMOUNT', { value: waterAmount });
	}, [waterAmount]);

	useEffect(() => {
		send('UPDATE_DURATION', { value: timer });
	}, [timer]);

	return (
		<Base>
			<Container style={{ outline: 'red' }}>
				<Box mb="m">
					<Header
						title="Coffee timer"
						right={
							<IconButton
								aria-label="About coffee timer"
								onClick={() => setSettingsOpen(true)}
							>
								<Icon icon="menu" size={28} />
							</IconButton>
						}
					/>
				</Box>
				<MainScreen
					status={status}
					waterFrom={waterFrom}
					waterTo={waterTo}
					waterAmount={waterAmount}
					coffeeAmount={coffeeAmount}
					ratio={ratio}
					timer={timer}
					elapsed={elapsed}
					steps={steps}
					onWaterAmountChange={setWaterAmount}
					onToggle={() => send('TOGGLE')}
				/>
				<Modal
					isOpen={isSettingsOpen}
					onDismiss={() => setSettingsOpen(false)}
					aria-label="About coffee timer"
				>
					<Box mb="m">
						<Header
							title="About coffee timer"
							right={
								<IconButton
									aria-label="Close"
									onClick={() => setSettingsOpen(false)}
								>
									<Icon icon="close" size={28} />
								</IconButton>
							}
						/>
					</Box>
					<SettingsScreen ratio={ratio} onRatioChange={setRatio} />
				</Modal>
			</Container>
		</Base>
	);
}

import React, { useState } from 'react';
import { Box, Container } from 'tamia';
import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { Modal } from '../components/Modal';
import { MainScreen } from '../screens/MainScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Base from './Base';

export default function IndexPage() {
	const [isSettingsOpen, setSettingsOpen] = useState(false);

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
				<MainScreen />
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
					<SettingsScreen />
				</Modal>
			</Container>
		</Base>
	);
}

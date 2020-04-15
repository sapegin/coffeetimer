import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { Box, Container } from 'tamia';
import { App } from '../components/App';
import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { MainScreen } from '../screens/MainScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export const IndexPage = () => {
	const [isSettingsOpen, setSettingsOpen] = useState(false);

	return (
		<App>
			<Container>
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
				<Dialog
					isOpen={isSettingsOpen}
					onDismiss={() => setSettingsOpen(false)}
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
				</Dialog>
			</Container>
		</App>
	);
};

export default IndexPage;

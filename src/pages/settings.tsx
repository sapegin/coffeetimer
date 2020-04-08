import React from 'react';
import Link from 'next/link';
import { Box } from 'tamia';
import { App } from '../components/App';
import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { SettingsScreen } from '../screens/SettingsScreen';

export const IndexPage = () => {
	return (
		<App>
			<Box mb="m">
				<Header
					title="About coffee timer"
					right={
						<Link href="/" passHref>
							<IconButton as="a" aria-label="Close">
								<Icon icon="close" size={28} />
							</IconButton>
						</Link>
					}
				/>
			</Box>
			<SettingsScreen />
		</App>
	);
};

export default IndexPage;

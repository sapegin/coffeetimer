import React from 'react';
import { Flex, Text, Link } from 'tamia';

export const SettingsScreen = () => {
	return (
		<Flex as="main" flexDirection="column" gap="m">
			<Text>
				<span aria-hidden="true">🦠</span> Made at home in Berlin during the
				Coronavirus lockdown by{' '}
				<Link href="https://sapegin.me/">Artem&nbsp;Sapegin</Link>.
			</Text>
			<Text>
				<Link href="https://github.com/sapegin/coffeetimer">Source code</Link>.
				Powered by <Link href="https://reactjs.org/">React</Link>,{' '}
				<Link href="https://www.gatsbyjs.org/">Gatsby</Link>,{' '}
				<Link href="https://styled-components.com/">styled-components</Link>,{' '}
				<Link href="https://styled-system.com/">Styled System</Link>,{' '}
				<Link href="https://xstate.js.org/">XState</Link>,{' '}
				<Link href="https://tamiadev.github.io/tamia/">Tâmia</Link>. Icons:{' '}
				<Link href="https://ionicons.com/">Ionicons</Link>,{' '}
				<Link href="https://thenounproject.com/coquet_adrien/">
					Adrien Coquet
				</Link>{' '}
				and{' '}
				<Link href="https://thenounproject.com/Millenials/">Millenials</Link>.
				Sound by{' '}
				<Link href="https://freesound.org/people/Robinhood76/">
					Robinhood76
				</Link>
				.
			</Text>
		</Flex>
	);
};

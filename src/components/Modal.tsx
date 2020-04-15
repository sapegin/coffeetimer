import React from 'react';
import { useTransition, animated } from 'react-spring';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

const AnimatedDialogOverlay = animated(DialogOverlay);

export const Modal = ({
	children,
	...props
}: React.ComponentProps<typeof Dialog>) => {
	const transitions = useTransition(props.isOpen, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	return (
		<>
			{transitions.map(
				({ item, key, props: styles }) =>
					item && (
						<AnimatedDialogOverlay key={key} style={styles}>
							<DialogContent>{children}</DialogContent>
						</AnimatedDialogOverlay>
					)
			)}
		</>
	);
};

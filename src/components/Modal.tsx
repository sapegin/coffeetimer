import React from 'react';
import { Modal as ModalBase } from 'react-responsive-modal';

export const Modal = ({
	children,
	...props
}: React.ComponentProps<typeof ModalBase>) => {
	return (
		<ModalBase center showCloseIcon={false} {...props}>
			{children}
		</ModalBase>
	);
};

import React from 'react';
import { TamiaRoot } from 'tamia';
import theme from '../theme';

export const Provider: React.FC = ({ children }) => (
	<TamiaRoot theme={theme}>{children}</TamiaRoot>
);

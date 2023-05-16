import React, { ReactNode } from 'react';
import { StudioProvider } from './studio';

type StudioProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: StudioProps) => (
    <StudioProvider>
        {children}
    </StudioProvider>
);

export default AppProvider;

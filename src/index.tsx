import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import App from './app';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

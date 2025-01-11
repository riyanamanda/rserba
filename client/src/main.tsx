import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import './index.css';
import { ThemeProvider } from './components/ThemeProvider';
import GuestRoute from './routes/GuestRoute';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (import.meta.env.MODE === 'production') {
    disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <HelmetProvider>
                <BrowserRouter>
                    <GuestRoute />
                </BrowserRouter>
            </HelmetProvider>
        </ThemeProvider>
    </Provider>
);

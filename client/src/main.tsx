import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import './index.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { QueryClientProvider } from 'react-query';
import AppRoute from './routes/AppRoute';
import queryClient from './lib/queryClient';

if (import.meta.env.MODE === 'production') {
    disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <HelmetProvider>
                    <BrowserRouter>
                        <AppRoute />
                    </BrowserRouter>
                </HelmetProvider>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>
);

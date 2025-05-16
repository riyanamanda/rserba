import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './components/ThemeProvider';
import AuthProvider from './context/authProvider';
import './index.css';
import queryClient from './lib/queryClient';
import AppRoute from './routes/AppRoute';

if (import.meta.env.MODE === 'production') {
    disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <BrowserRouter>
                    <AuthProvider>
                        <AppRoute />
                    </AuthProvider>
                </BrowserRouter>
            </ThemeProvider>
        </HelmetProvider>
    </QueryClientProvider>
);

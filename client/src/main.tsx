import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import './index.css';
import AppRoute from './routes/AppRoute';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <HelmetProvider>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </HelmetProvider>
    </ThemeProvider>
);

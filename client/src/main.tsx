import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import AppRoute from './routes/AppRoute';

createRoot(document.getElementById('root')!).render(
    <HelmetProvider>
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    </HelmetProvider>
);

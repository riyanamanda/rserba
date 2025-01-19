import ErrorPage from '@/components/ErrorPage';
import CmsLayout from '@/components/layout/admin/CmsLayout';
import Category from '@/pages/admin/category';
import Dashboard from '@/pages/admin/Dashboard';
import Berita from '@/pages/Berita';
import Home from '@/pages/Home';
import Layanan from '@/pages/Layanan';
import Login from '@/pages/Login';
import StrukturOrganisasi from '@/pages/StrukturOrganisasi';
import VisiMisi from '@/pages/VisiMisi';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

export default function GuestRoute() {
    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path='visi-misi' element={<VisiMisi />} />
                <Route path='struktur-organisasi' element={<StrukturOrganisasi />} />
                <Route path='layanan' element={<Layanan />} />
                <Route path='berita' element={<Berita />} />
                <Route path='login' element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='admin' element={<CmsLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='category' element={<Category />} />
                    </Route>
                </Route>
            </Routes>
        </ErrorBoundary>
    );
}

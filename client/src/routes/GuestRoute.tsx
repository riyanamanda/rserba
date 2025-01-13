import CmsLayout from '@/components/layout/admin/CmsLayout';
import useAuth from '@/hooks/useAuth';
import Dashboard from '@/pages/admin/Dashboard';
import Berita from '@/pages/Berita';
import Home from '@/pages/Home';
import Layanan from '@/pages/Layanan';
import Login from '@/pages/Login';
import StrukturOrganisasi from '@/pages/StrukturOrganisasi';
import VisiMisi from '@/pages/VisiMisi';
import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

export default function GuestRoute() {
    const { current } = useAuth();

    useLayoutEffect(() => {
        const token = localStorage.getItem('erba-auth');

        if (token !== null) {
            current();
        }
    }, [current]);

    return (
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
                </Route>
            </Route>
        </Routes>
    );
}

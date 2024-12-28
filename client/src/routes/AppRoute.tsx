import Dashboard from '@/pages/admin/dashboard/index.tsx';
import CmsLayout from '@/components/layout/admin/CmsLayout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { Route, Routes } from 'react-router';

const AppRoute = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />

            <Route path='admin' element={<CmsLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;

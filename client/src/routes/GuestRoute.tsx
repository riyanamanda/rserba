import CmsLayout from '@/components/layout/admin/CmsLayout';
import useAuth from '@/hooks/useAuth';
import About from '@/pages/About';
import Dashboard from '@/pages/admin/Dashboard';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { setUserData } from '@/state/auth/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

export default function GuestRoute() {
    const token = localStorage.getItem('erba-auth');
    const { current, logout } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            current(token)
                .then((user) => {
                    dispatch(setUserData(user.data));
                })
                .catch((error) => {
                    if (error.status === 401 || error.status === 403) {
                        logout();
                    }
                });
        }
    }, [current, token, dispatch, logout]);

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route path='admin' element={<CmsLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Route>
        </Routes>
    );
}

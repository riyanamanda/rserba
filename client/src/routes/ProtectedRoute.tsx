import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoute() {
    const isLogged = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isLogged ? <Outlet /> : <Navigate to='/login' replace={true} />;
}

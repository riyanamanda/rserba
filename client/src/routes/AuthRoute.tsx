import { useAuth } from '@/context/authProvider';
import { Navigate, Outlet } from 'react-router';

const AuthRoute = () => {
    const { currentUser } = useAuth();

    if (currentUser === null) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
};

export default AuthRoute;

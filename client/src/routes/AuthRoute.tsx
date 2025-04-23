import { useAuth } from '@/context/authProvider';
import { Navigate, Outlet } from 'react-router';

const AuthRoute = () => {
    const { currentUser } = useAuth();
    console.log(currentUser)
    return currentUser ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

export default AuthRoute;

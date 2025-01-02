import { useState } from 'react';
import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoute() {
    const [isLogged] = useState(false);

    return isLogged ? <Outlet /> : <Navigate to='/login' replace={true} />;
}

import { useCookie } from '@/hooks/useCookie';
import { api, client } from '@/lib/axios';
import { AuthUser, LoginProps } from '@/types';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type AuthContext = {
    currentUser: AuthUser | null;
    pending: boolean;
    login: (data: LoginProps) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
    const [pending, setPending] = useState(false);
    const { setCookie, removeCookie } = useCookie();

    const login = async (data: LoginProps) => {
        setPending(true);
        await client
            .post('/api/login', data)
            .then((response) => {
                const { data } = response;
                setCookie('erba-auth', data.token);
            })
            .catch((error) => {
                console.error('Login error:', error);
            });

        await fetchMe();
        setPending(false);
        // navigate('/admin/dashboard');
    };

    const logout = () => {
        removeCookie('erba-auth');
    };

    const fetchMe = async () => {
        await api
            .get('/api/current')
            .then((response) => {
                const { data } = response;
                setCurrentUser(data);
            })
            .catch(() => {
                setCurrentUser(null);
            });
    };

    useEffect(() => {
        fetchMe();
    }, []);

    return <AuthContext.Provider value={{ currentUser, pending, login, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export default AuthProvider;

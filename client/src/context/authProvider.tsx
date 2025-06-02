import { useCookie } from '@/hooks/useCookie';
import { api, client } from '@/lib/axios';
import { AuthUser, LoginProps } from '@/types';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type AuthContext = {
    currentUser: AuthUser | null;
    pending: boolean;
    login: (data: LoginProps) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
    const [pending, setPending] = useState(false);

    const cookie = useCookie();

    const login = async (data: LoginProps) => {
        setPending(true);
        await client
            .post('/api/login', data)
            .then((response) => {
                const { data } = response;
                cookie.setCookie('erba-auth', data.token);
            })
            .catch(() => {
                setCurrentUser(null);
                setPending(false);
            })
            .finally(() => {
                setPending(false);
            });
        await getCurrentUser();
    };

    const logout = async () => {
        setCurrentUser(null);
        cookie.removeCookie('erba-auth');
    };

    const getCurrentUser = async () => {
        await api
            .get('/api/current')
            .then((response) => {
                setCurrentUser(response.data);
            })
            .catch(() => {
                setCurrentUser(null);
            });
    };

    useEffect(() => {
        getCurrentUser();
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

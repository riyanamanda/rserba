import { client } from '@/lib/axios';
import { useCookie } from './useCookie';
import { useNavigate } from 'react-router';

interface ILogin {
    email: string;
    password: string;
}

export const useAuth = () => {
    const { setCookie } = useCookie();
    const navigate = useNavigate();

    const login = async (data: ILogin) => {
        client
            .post('/api/login', data)
            .then((response) => {
                setCookie('erba-auth', response.data.token);
                navigate('/admin/dashboard', { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        login,
    };
};

import { client } from '@/lib/axios';
import showToast from '@/lib/toast';
import { clearUserData, setUserData } from '@/state/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useCookie } from './useCookie';

type DataProps = {
    email: string;
    password: string;
};

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookie = useCookie();

    const current = async () => {
        return await client
            .get('/api/current', {
                headers: {
                    Authorization: `Bearer ${cookie.getCookie('erba-auth')}`,
                },
            })
            .then((response) => {
                dispatch(setUserData(response.data));
            })
            .catch((error) => {
                if (error.status === 401) {
                    showToast('error', error.message);
                    logout();
                }

                if (error.status === 403) {
                    navigate(-1);
                    showToast('info', 'You are not allowed access the page');
                }

                if (error.status === 500) {
                    showToast('error', 'Internal server error');
                }
            });
    };

    const login = async (
        data: DataProps,
        form: { setError: (field: 'email' | 'password', error: { message: string }) => void },
        setIsLoading: (arg: boolean) => void
    ) => {
        setIsLoading(true);

        await client
            .post('/api/login', data)
            .then(async (response) => {
                cookie.setCookie('erba-auth', response.data.token);
                navigate('/admin', { replace: true });
            })
            .catch((error) => {
                if (error.status === 401) form.setError('email', { message: 'Email or Password is incorrect' });

                if (error.status === 400) {
                    Object.keys(error.response.data.errors).forEach((err) =>
                        form.setError(err as 'email' | 'password', {
                            message: error.response.data.errors[err],
                        })
                    );
                }

                if (error.status === 500) {
                    showToast('error', 'Internal server error');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const logout = () => {
        dispatch(clearUserData());
        cookie.removeCookie('erba-auth');
        navigate('/login', { replace: true });
    };

    return { current, login, logout };
};

import { client } from '@/lib/axios';
import showToast from '@/lib/toast';
import { clearUserData, setUserData } from '@/state/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

type DataProps = {
    email: string;
    password: string;
};

const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const current = async () => {
        return await client
            .get('/api/current', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('erba-auth')}`,
                },
            })
            .then((response) => {
                const user = response.data;
                dispatch(setUserData(user));
            })
            .catch((error) => {
                if (error.status === 401 || error.status === 403) showToast('info', 'Your token has been expired!', { position: 'top-center' });
                logout();
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
                localStorage.setItem('erba-auth', response.data.token);
                await current();
                navigate('/admin', { replace: true });
            })
            .catch((error) => {
                if (error.status === 401 || error.status === 403) form.setError('email', { message: 'Email or Password is incorrect' });

                if (error.status === 400) {
                    Object.keys(error.response.data.errors).forEach((err) =>
                        form.setError(err as 'email' | 'password', {
                            message: error.response.data.errors[err],
                        })
                    );
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const logout = () => {
        dispatch(clearUserData());
        localStorage.removeItem('erba-auth');
        navigate('/', { replace: true });
    };

    return { current, login, logout };
};

export default useAuth;

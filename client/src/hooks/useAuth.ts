import { client } from '@/lib/axios';
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

    const current = async (token: string) => {
        const { data: response } = await client.get('/api/current', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    };

    const login = async (data: DataProps, form: { setError: (field: 'email' | 'password', error: { message: string }) => void }) => {
        await client
            .post('/api/login', data)
            .then(async (response) => {
                const token = response.data.data.token;
                localStorage.setItem('erba-auth', token);

                const user = await current(token);
                dispatch(setUserData(user.data));

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

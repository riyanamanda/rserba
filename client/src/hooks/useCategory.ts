import { client } from '@/lib/axios';
import showToast from '@/lib/toast';
import { useNavigate } from 'react-router';
import { useCookie } from './useCookie';
import { useQueryClient } from 'react-query';

export const useCategory = () => {
    const navigate = useNavigate();
    const cookie = useCookie();
    const queryClient = useQueryClient();

    const getCategories = async (options: { pageIndex: number; pageSize: number }) => {
        return await client
            .get(`/api/category?page=${options.pageIndex}&size=${options.pageSize}`, {
                headers: {
                    Authorization: `Bearer ${cookie.getCookie('erba-auth')}`,
                },
            })
            .then((res) => res.data)
            .catch((error) => {
                if (error.status === 401) {
                    navigate(-1);
                    showToast('error', error.message);
                }
            });
    };

    const createCategory = async (
        data: { name: string },
        form: { setError: (field: 'name', error: { message: string }) => void },
        setIsLoading: (arg: boolean) => void
    ) => {
        setIsLoading(true);

        await client
            .post('/api/category', data, {
                headers: {
                    Authorization: `Bearer ${cookie.getCookie('erba-auth')}`,
                },
            })
            .then(() => {
                showToast('success', 'Category created successfully');
                queryClient.invalidateQueries('categories');
                navigate('/admin/category');
            })
            .catch((error) => {
                if (error.status === 401) {
                    showToast('error', error.message);
                }

                if (error.status === 400) {
                    Object.keys(error.response.data.errors).forEach((err) =>
                        form.setError(err as 'name', {
                            message: error.response.data.errors[err],
                        })
                    );
                }
            })
            .finally(() => setIsLoading(false));
    };

    return { getCategories, createCategory };
};

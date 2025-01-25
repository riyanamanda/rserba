import { api } from '@/lib/axios';
import queryClient from '@/lib/queryClient';
import showToast from '@/lib/toast';
import { useNavigate } from 'react-router';

export const useCategory = () => {
    const navigate = useNavigate();

    const getCategories = async (options: { pageIndex: number; pageSize: number }) => {
        return await api.get(`/api/category?page=${options.pageIndex}&size=${options.pageSize}`);
    };

    const createCategory = async (
        data: { name: string },
        form: { setError: (field: 'name', error: { message: string }) => void },
        setIsLoading: (arg: boolean) => void
    ) => {
        setIsLoading(true);

        await api
            .post('/api/category', data)
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

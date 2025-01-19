import { client } from '@/lib/axios';
import showToast from '@/lib/toast';
import { useNavigate } from 'react-router';
import { useCookie } from './useCookie';

export const useCategory = () => {
    const navigate = useNavigate();
    const cookie = useCookie();

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

    return { getCategories };
};

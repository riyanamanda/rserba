import AdminPageLayout from '@/components/layout/admin/AdminPageLayout';
import { Button } from '@/components/ui/button';
import { useCategory } from '@/hooks/useCategory';
import showToast from '@/lib/toast';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router';
import { DataTable } from '../../../components/DataTable';
import { columns } from './Columns';

const Category = () => {
    const { getCategories } = useCategory();
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories', pagination],
        queryFn: () => getCategories(pagination),
        onError: () => {
            showToast('error', 'You are unauthorized to access the page');
            return;
        },
    });

    return (
        <AdminPageLayout title='Categories' description='All data of categories provided here.'>
            <div className='flex items-center justify-end py-5'>
                <NavLink to={'/admin/category/create'}>
                    <Button variant={'outline'} size={'xs'}>
                        New Category
                    </Button>
                </NavLink>
            </div>

            {isLoading ? (
                <div className='flex items-center justify-center mt-32'>Loading...</div>
            ) : (
                <DataTable
                    columns={columns}
                    data={categories?.data.content}
                    pageIndex={pagination.pageIndex}
                    pageSize={pagination.pageSize}
                    pageCount={categories?.data.total}
                    setPagination={setPagination}
                />
            )}
        </AdminPageLayout>
    );
};

export default Category;

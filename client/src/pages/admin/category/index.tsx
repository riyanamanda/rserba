import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCategory } from '@/hooks/useCategory';
import { FormatDate } from '@/lib/formatDate';
import showToast from '@/lib/toast';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router';
import { DataTable } from '../../../components/DataTable';
import AdminPageLayout from '@/components/layout/admin/AdminPageLayout';

type CategoryProps = {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
};

const Category = () => {
    const { getCategories } = useCategory();
    const navigate = useNavigate();
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

    const columns: ColumnDef<CategoryProps>[] = [
        {
            accessorKey: 'id',
            header: 'No.',
            cell: ({ row, table }) => {
                const rowNumber = table.getState().pagination.pageIndex * table.getState().pagination.pageSize + row.index + 1;
                return <span>{rowNumber}</span>;
            },
        },
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'created_at',
            header: () => <div className='text-center'>Created at</div>,
            cell: ({ row }) => {
                const date = new Date(row.getValue('created_at'));

                return <div className='text-center'>{FormatDate(date.toISOString())}</div>;
            },
        },
        {
            accessorKey: 'updated_at',
            header: () => <div className='text-center'>Updated at</div>,
            cell: ({ row }) => {
                const date = row.getValue('updated_at');
                const result = row.getValue('updated_at') ? FormatDate((date as Date).toISOString()) : '-';

                return <div className='text-center'>{result}</div>;
            },
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                const category = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost' className='h-8 w-8 p-0'>
                                <span className='sr-only'>Open menu</span>
                                <MoreHorizontal className='h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigate(`/admin/category/${category.slug}`)} className='cursor-pointer'>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className='w-full cursor-pointer'>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

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

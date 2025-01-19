import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCategory } from '@/hooks/useCategory';
import { FormatDate } from '@/lib/formatDate';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { DataTable } from '../../../components/DataTable';

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
    });

    const columns: ColumnDef<CategoryProps>[] = [
        {
            accessorKey: 'id',
            header: 'No.',
            cell: ({ row }) => {
                return <span>{row.index + 1}</span>;
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
        <div className='p-4 pt-0'>
            <div>
                <h1 className='scroll-m-20 leading-relaxed text-xl font-extrabold tracking-tight'>Categories</h1>
                <p className='leading-7 text-muted-foreground text-sm'>All data of categories provided here.</p>
            </div>

            <div className='mt-10'>
                {isLoading ? (
                    <div className='flex items-center justify-center mt-32'>Loading...</div>
                ) : (
                    <DataTable
                        columns={columns}
                        data={categories.content}
                        pageIndex={pagination.pageIndex}
                        pageSize={pagination.pageSize}
                        pageCount={categories.total}
                        setPagination={setPagination}
                    />
                )}
            </div>
        </div>
    );
};

export default Category;

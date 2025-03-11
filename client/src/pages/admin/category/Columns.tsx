import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FormatDate } from '@/lib/formatDate';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router';

type CategoryProps = {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
};

export const columns: ColumnDef<CategoryProps>[] = [
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
            const date = new Date(row.getValue('updated_at'));
            const result = row.getValue('updated_at') ? FormatDate(date.toISOString()) : '-';

            return <div className='text-center'>{result}</div>;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
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
                        <Link to={`/admin/category/${row.original.slug}`}>
                            <DropdownMenuItem className='w-full cursor-pointer'>Edit</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className='w-full cursor-pointer'>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

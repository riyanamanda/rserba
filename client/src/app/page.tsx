'use client';

import AppLayout from '@/components/layout/AppLayout';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();

    console.log(theme);

    return (
        <AppLayout>
            <div className='flex items-center justify-center h-full flex-col space-y-3'>
                <h1 className='text-3xl font-semibold mb-5'>
                    Rumah Sakit Ernaldi Bahar
                </h1>
                <p className='font-medium text-red-500 border p-3 rounded shadow-xl shadow-red-500/10 border-red-500/20'>
                    The website is under construction
                </p>
            </div>
        </AppLayout>
    );
}

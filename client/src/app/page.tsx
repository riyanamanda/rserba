'use client';

import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();

    console.log(theme);

    return (
        <main className='flex items-center justify-center h-full text-slate-900 dark:text-slate-200 bg-white dark:bg-black'>
            <h1 className='text-3xl font-semibold'>
                Rumah Sakit Ernaldi Bahar
            </h1>
        </main>
    );
}

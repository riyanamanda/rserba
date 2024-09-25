'use client';

import AppLayout from '@/components/layout/AppLayout';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();

    console.log(theme);

    return (
        <AppLayout>
            <div className='flex items-center justify-center h-full flex-col space-y-3 bg-white dark:bg-black mt-56'>
                <TextGenerateEffect
                    words='Rumah Sakit Ernaldi Bahar'
                    duration={1}
                    className='mb-10'
                />

                <p className='font-medium text-red-500 border p-3 rounded shadow-xl shadow-red-500/10 border-red-500/20 animate-pulse'>
                    The website is under construction
                </p>
            </div>
        </AppLayout>
    );
}

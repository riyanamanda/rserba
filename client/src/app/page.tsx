'use client';

import AppLayout from '@/components/layout/AppLayout';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();
    console.log(theme);

    return (
        <AppLayout>
            <div className='flex items-center justify-center h-full w-full flex-col space-y-3 mt-20'>
                <Spotlight className='h-screen -left-20' />

                {/* Hero */}
                <section className='flex justify-between w-full'>
                    <div className='w-6/12 pl-8'>
                        <h2 className='mb-5 font-medium text-gray-400 text-sm'>
                            Selamat datang di RS Ernaldi Bahar Palembang
                        </h2>

                        <TextGenerateEffect
                            words='Temukan lingkungan yang penuh kasih sayang dan pengertian, tempat yang tepat untuk memulai penyembuhan.'
                            className='w-10/12 leading-relaxed text-white text-2xl'
                            duration={1}
                        />
                    </div>

                    <div className='w-6/12 bg-gray-900 flex items-center justify-center'>
                        right text or photos
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}

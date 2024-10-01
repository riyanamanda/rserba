'use client';

import { Features } from '@/components/feature';
import AppLayout from '@/components/layout/AppLayout';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();
    console.log(theme);

    return (
        <AppLayout>
            {/* Hero */}
            <section className='flex items-center justify-center h-full w-full flex-col space-y-3 py-20 mb-24'>
                <Spotlight className='h-screen -left-20' />

                <div className='flex justify-between w-full mb-56 h-96'>
                    <div className='w-6/12 pl-8'>
                        <h2 className='mb-3 font-medium text-gray-400 text-xs border border-gray-500/30 w-fit px-3 py-1.5 rounded-full bg-gray-900'>
                            Selamat datang di RS Ernaldi Bahar Palembang
                        </h2>

                        <TextGenerateEffect
                            words='Temukan lingkungan yang penuh kasih sayang dan pengertian, tempat yang tepat untuk memulai penyembuhan.'
                            className='w-10/12 leading-loose text-white text-2xl'
                            duration={1}
                        />
                    </div>

                    <div className='w-6/12 bg-gray-900 flex items-center justify-center'>
                        right text or photos
                    </div>
                </div>
            </section>

            {/* Pelayanan */}
            <section>
                <div className='mb-10 text-center font-medium leading-relaxed'>
                    <h2 className='text-3xl mb-3'>
                        Pelayanan Poli Rumah Sakit
                    </h2>
                    <p className='max-w-[40rem] mx-auto text-sm text-gray-400 leading-relaxed'>
                        Rumah sakit Ernaldi Bahar dengan tenaga medis yang
                        profesional dan fasilitas yang lengkap, kami siap
                        membantu Anda kembali sehat.
                    </p>
                </div>

                <Features />
            </section>
        </AppLayout>
    );
}

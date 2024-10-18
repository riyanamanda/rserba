'use client';

import { Features } from '@/components/feature';
import AppLayout from '@/components/layout/AppLayout';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <AppLayout>
            {/* Hero */}
            <section className='flex items-center justify-center h-full w-full flex-col space-y-3 py-20 mb-20'>
                <Spotlight className='h-screen -left-20' />

                <div className='flex justify-between w-full mb-56 h-96'>
                    <div className='w-6/12 pl-8'>
                        <h2 className='mb-3 font-medium text-gray-400 text-xs border border-gray-500/30 w-fit px-3 py-1.5 rounded-full bg-gray-900'>
                            Selamat datang di RS Ernaldi Bahar Palembang
                        </h2>

                        <TextGenerateEffect
                            words='Temukan lingkungan yang penuh kasih sayang dan pengertian, tempat yang tepat untuk memulai pemulihan.'
                            className='w-10/12 leading-loose text-white text-2xl'
                            duration={1}
                        />
                    </div>

                    <div className='w-6/12 h-full'>
                        <div className='grid grid-cols-3 gap-2'>
                            <Image
                                src='/images/dokter/dr-abdullah.png'
                                alt='Dokter'
                                className='w-80 rounded-s-lg h-full aspect-auto'
                                width={500}
                                height={500}
                            />
                            <Image
                                src='/images/dokter/dr-dini.png'
                                alt='Dokter'
                                className='w-80 h-full aspect-auto'
                                width={500}
                                height={500}
                            />
                            <Image
                                src='/images/dokter/dr-ferry.png'
                                alt='Dokter'
                                className='w-80 rounded-e-lg h-full aspect-auto'
                                width={500}
                                height={500}
                            />
                        </div>

                        <blockquote className='relative mt-6'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='lucide lucide-quote text-gray-500'
                            >
                                <path d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z' />
                                <path d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z' />
                            </svg>
                            <em className='text-gray-200 pl-5 absolute top-3 text-xl'>
                                Terima kasih kepada para pahlawan berjas putih
                                yang selalu berjuang demi kesehatan kita
                            </em>
                        </blockquote>

                        <div className='mt-16 text-xs'>
                            <Link href='/'>
                                <HoverBorderGradient
                                    containerClassName='rounded'
                                    as='button'
                                >
                                    Lihat Semua
                                </HoverBorderGradient>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pelayanan */}
            <section>
                <div className='mb-10 text-center font-medium leading-relaxed'>
                    <h2 className='text-3xl mb-3'>Layanan Poli</h2>
                    <p className='max-w-[40rem] mx-auto text-sm text-gray-400 leading-relaxed'>
                        Rumah sakit Ernaldi Bahar dengan tenaga medis yang
                        profesional dan fasilitas yang lengkap, kami siap
                        membantu Anda kembali sehat.
                    </p>
                </div>

                <Features />
            </section>

            {/* Mitra */}
            <section className='mt-20'>
                <div className='mb-10 text-center font-medium leading-relaxed'>
                    <h2 className='text-3xl mb-3'>Kerjasama</h2>
                    <p className='max-w-[40rem] mx-auto text-sm text-gray-400 leading-relaxed'>
                        Rumah sakit Ernaldi Bahar bekerjasama dengan beberapa asuransi dan organisasi
                    </p>
                </div>

                <div className='flex items-center gap-10 justify-center bg-gray-200 p-3 rounded-lg'>
                    <Image src='/bpjs.png' alt='bpjs' width={200} height={200} className='w-auto drop-shadow'/>
                    <Image src='/germas.png' alt='germas' width={100} height={100} className='w-auto drop-shadow'/>
                    <Image src='/dinkes.png' alt='dinkes' width={150} height={150} className='w-auto drop-shadow'/>
                </div>
            </section>
        </AppLayout>
    );
}

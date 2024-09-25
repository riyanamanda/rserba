import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-col max-w-[84rem] mx-auto'>
            <div className='mb-7 flex items-center justify-between pt-5'>
                <Link href='/'>
                    <h1 className='text-xl'>Logo | RS Ernaldi Bahar</h1>
                </Link>

                <div className='flex items-start gap-x-12'>
                    <div className='flex space-x-2 max-w-xs'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='lucide lucide-clock'
                        >
                            <circle cx='12' cy='12' r='10' />
                            <polyline points='12 6 12 12 16 14' />
                        </svg>

                        <div className='flex flex-col'>
                            <span className='font-medium text-xs mb-1'>
                                SENIN - JUMAT : 08:00 - 16:00
                            </span>
                            <span className='text-gray-400 text-xs'>
                                Sabtu dan Minggu - TUTUP
                            </span>
                        </div>
                    </div>

                    <div className='flex space-x-3 max-w-xs'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='lucide lucide-phone'
                        >
                            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                        </svg>

                        <div className='flex flex-col'>
                            <span className='font-medium text-xs mb-1'>
                                (0711) 5645126
                            </span>
                            <span className='text-gray-400 text-xs'>
                                Hubungi kami
                            </span>
                        </div>
                    </div>

                    <div className='flex space-x-3 max-w-xs'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='lucide lucide-map-pin'
                        >
                            <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
                            <circle cx='12' cy='10' r='3' />
                        </svg>

                        <div className='flex flex-col'>
                            <span className='font-medium text-xs mb-1'>
                                Jl. Gubernur H. Muhammad Ali Amin
                            </span>
                            <span className='text-gray-400 text-xs'>
                                Kec. Alang-Alang Lebar, Palembang
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <nav className='text-xs space-x-5 font-medium dark:text-gray-400'>
                    <Link href='/' className='dark:text-gray-200'>
                        Beranda
                    </Link>
                    <Link href='/'>Tentang</Link>
                    <Link href='/'>Layanan</Link>
                    <Link href='/'>Berita</Link>
                    <Link href='/'>Informasi</Link>
                    <Link href='/'>Diklat</Link>
                </nav>

                <div className='space-x-5 text-sm'>
                    <span>light</span>
                    <span>login</span>
                </div>
            </div>
        </header>
    );
};

export default Header;

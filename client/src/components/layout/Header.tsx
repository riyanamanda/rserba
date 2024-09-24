import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='mb-3 flex items-center justify-between pt-5'>
                <Link href='/'>
                    <h1 className='text-xl'>Logo | RS Ernaldi Bahar</h1>
                </Link>

                <div className='flex items-center gap-x-12'>
                    <div className='flex space-x-2'>
                        <div className='text-xs'>Logo</div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-sm mb-1'>
                                SENIN-JUMAT:08:00-16:00
                            </div>
                            <div className='text-slate-400 text-xs'>
                                Sabtu dan Minggu - TUTUP
                            </div>
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <div className='text-xs'>Logo</div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-sm mb-1'>
                                SENIN-JUMAT:08:00-16:00
                            </div>
                            <div className='text-slate-400 text-xs'>
                                Sabtu dan Minggu - TUTUP
                            </div>
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <div className='text-xs'>Logo</div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-sm mb-1'>
                                SENIN-JUMAT:08:00-16:00
                            </div>
                            <div className='text-slate-400 text-xs'>
                                Sabtu dan Minggu - TUTUP
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='text-xs space-x-5'>
                <Link href='/'>Tentang</Link>
                <Link href='/'>Layanan</Link>
                <Link href='/'>Berita</Link>
                <Link href='/'>Informasi</Link>
                <Link href='/'>Diklat</Link>
            </nav>
        </header>
    );
};

export default Header;

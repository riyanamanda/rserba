import AppLayout from '@/components/layout/AppLayout';
import { Spotlight } from '@/components/Spotlight';
import { TypingEffect } from '@/components/TypingEffect';
import { Button } from '@/components/ui/button';
import { Megaphone } from 'lucide-react';

const Home = () => {
    return (
        <AppLayout>
            <section className='w-full flex items-center py-28 relative'>
                <Spotlight className='left-20' />
                <div className='w-6/12 pl-24 space-y-5 h-full'>
                    <p className='flex items-center  gap-3 text-xs font-semibold w-fit rounded-full px-3 py-1 bg-accent text-accent-foreground'>
                        <Megaphone width={18} height={18} className='animate-bounce text-primary' />
                        <span>Pelayanan: senin - jumat | dari jam 7.30 - 15.00</span>
                    </p>

                    <TypingEffect text='Pemulihan adalah sebuah perjalanan' />

                    <p className='w-9/12 leading-relaxed text-muted-foreground'>
                        Melainkan sebuah filosofi hidup yang mencerminkan betapa kompleks dan penuh arti proses untuk kembali pulih, baik secara
                        fisik, mental, maupun emosional.
                    </p>

                    <Button variant={'default'} size={'lg'} className='shadow-xl shadow-primary/20'>
                        Daftar melalui M-JKN untuk pelayanan spesial
                    </Button>

                    <div className='space-y-3 text-sm pt-5'>
                        <h3 className='text-xs font-bold border-b text-muted-foreground border-primary w-32 pb-2'>Kemitraan</h3>
                        <ul className='flex items-center gap-5 text-xs font-medium'>
                            <li className='border p-2 rounded-lg bg-accent text-accent-foreground'>BPJS</li>
                            <li className='border p-2 rounded-lg bg-accent text-accent-foreground'>Kementrian Kesehatan</li>
                            <li className='border p-2 rounded-lg bg-accent text-accent-foreground'>Dinas Kesehatan</li>
                            <li className='border p-2 rounded-lg bg-accent text-accent-foreground'>Gerakan Masyarakat</li>
                        </ul>
                    </div>
                </div>

                <div className='w-6/12 rounded-lg overflow-hidden shadow-xl shadow-card/20'>
                    <div className='h-[410px] w-[770] flex items-center justify-center bg-accent text-accent-foreground text-xs'>disini gambar</div>
                </div>
            </section>
        </AppLayout>
    );
};

export default Home;

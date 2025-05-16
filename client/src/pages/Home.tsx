import CountUp from '@/components/CountUp';
import Layanan from '@/components/Layanan';
import AppLayout from '@/components/layout/AppLayout';
import { Spotlight } from '@/components/Spotlight';
import { TypingEffect } from '@/components/TypingEffect';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Bed, Megaphone, MoveRightIcon } from 'lucide-react';
import { FaHospitalUser, FaUserDoctor } from 'react-icons/fa6';
import { NavLink } from 'react-router';

import { faq, poly } from '@/constans';

const Home = () => {
    return (
        <AppLayout>
            {/* Hero */}
            <section className='w-full flex items-center relative py-28 max-w-[90rem] mx-auto '>
                <Spotlight className='left-20' />
                <div className='w-6/12 pl-24 space-y-5 h-full'>
                    <p className='flex items-center  gap-3 text-xs font-semibold w-fit rounded-full px-3 py-1 bg-accent text-accent-foreground'>
                        <Megaphone width={18} height={18} className='animate-bounce text-primary' />
                        <span>Pelayanan: senin - jumat dari jam 7.30 - 15.00 | IGD 24 Jam</span>
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
                    <div className='h-[410px] w-[770px] flex items-center justify-center bg-accent text-accent-foreground text-xs'>
                        form cari dokter
                    </div>
                </div>
            </section>

            {/* Layanan */}
            <section className='my-20 w-full bg-card py-14 text-card-foreground'>
                <div className='max-w-[90rem] mx-auto'>
                    <div className='mx-auto w-fit space-y-5'>
                        <h1 className='text-center text-xl mb-2 font-semibold leading-relaxed tracking-tight'>Layanan Poli</h1>
                        <p className='text-center text-sm text-muted-foreground'>
                            Berbagai layanan poli <span className='font-semibold text-foreground'>Umum</span> dan{' '}
                            <span className='font-semibold text-foreground'>Spesialis</span> dengan dokter senior yang bertugas di RS Ernaldi Bahar
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-10 mt-16'>
                        {poly.map((p) => (
                            <Layanan key={p.title} icon={p.icon} title={p.title} description={p.description} />
                        ))}
                    </div>
                    <NavLink to='/layanan' className='flex items-center ms-auto w-fit mt-5'>
                        <Button variant='link'>
                            Lainnya <MoveRightIcon />
                        </Button>
                    </NavLink>
                </div>
            </section>

            {/* Dokter */}
            {/* <section className='my-20 w-full pb-14'>
                <div className='max-w-[90rem] mx-auto'>
                    <div className='mx-auto w-fit space-y-5'>
                        <h1 className='text-center text-xl mb-2 font-semibold leading-relaxed tracking-tight'>Dokter</h1>
                        <p className='text-center text-sm text-muted-foreground'>Dokter umum dan spesialis yang bertugas di RS Ernaldi Bahar</p>
                    </div>
                    <div className='mt-16 flex items-start flex-wrap gap-10 justify-center content-center'>
                        {doctor.map((doc) => (
                            <DoctorCard name={doc.name} specialist={doc.specialist} image={doc.image_url} key={doc.id} />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Pengumuman dan Promo */}
            {/* <section className='my-20 w-full py-14 bg-card text-card-foreground'>
                <div className='max-w-[90rem] mx-auto text-center'>
                    <p>Disni pengumuman dan promo</p>
                </div>
            </section> */}

            {/* Count Up */}
            <section>
                <div className='max-w-[90rem] mx-auto grid grid-cols-2 place-content-center place-items-center py-14 pl-5'>
                    <p className='uppercase tracking-widest font-semibold text-sm w-full'>
                        Kelas <span className='text-primary'>A</span> dan ter-akreditasi <span className='text-tertiary'>paripurna</span> dengan
                        Layanan <span className='text-quarternary'>terbaik</span>
                    </p>
                    <div className='flex items-center justify-around w-full'>
                        <CountUp icon={FaUserDoctor} title='Dokter' number={21} />
                        <CountUp icon={Bed} title='Tempat Tidur' number={150} />
                        <CountUp icon={FaHospitalUser} title='Poliklinik' number={18} />
                    </div>
                </div>
            </section>

            {/* Berita */}
            {/* <section className='my-20 w-full py-14 bg-card text-card-foreground'>
                <div className='max-w-[90rem] mx-auto text-center'>
                    <p>Disni Berita terbaru</p>
                </div>
            </section> */}

            {/* FAQ */}
            <section className='py-10 mt-10'>
                <div className='max-w-[90rem] mx-auto w-full grid grid-cols-3'>
                    <h2 className='mt-5 scroll-m-20 pb-2 text-xl font-semibold tracking-tight col-span-1'>Pertanyaan yang sering diajukan (FAQ)</h2>
                    <Accordion type='single' collapsible className='col-span-2'>
                        {
                            faq.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className='cursor-pointer'>{item.quest}</AccordionTrigger>
                                    <AccordionContent>{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </section>
        </AppLayout>
    );
};

export default Home;

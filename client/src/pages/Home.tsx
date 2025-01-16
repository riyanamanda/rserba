import CountUp from '@/components/CountUp';
import Layanan from '@/components/Layanan';
import AppLayout from '@/components/layout/AppLayout';
import { Spotlight } from '@/components/Spotlight';
import { TypingEffect } from '@/components/TypingEffect';
import { Button } from '@/components/ui/button';
import {
    AmbulanceIcon,
    Bed,
    BrainCircuit,
    BrainCogIcon,
    GitBranchIcon,
    Megaphone,
    MoveRightIcon,
    PersonStandingIcon,
    PillIcon,
    SpeechIcon,
    UserRoundSearchIcon,
} from 'lucide-react';
import { FaHospitalUser, FaUserDoctor } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const poli = [
    {
        icon: BrainCogIcon,
        title: 'Poli Jiwa',
        description: 'Melayani pasien dengan gangguan kejiwaan, mental, dan asuhan keperawatan',
    },
    {
        icon: PillIcon,
        title: 'Poli Napza',
        description: 'Melayani pasien kecanduan narkoba, penyalahgunaan zat adiktif dan juga layanan metadon',
    },
    {
        icon: AmbulanceIcon,
        title: 'Instalasi Gawat Darurat',
        description: 'Melayani semua pasien kejiwaan dan umum selama 24 jam dengan dokter jaga',
    },
    {
        icon: BrainCircuit,
        title: 'Saraf',
        description: 'Layanan untuk melakukan pemeriksaan dan pengobatan gangguan pada sistem saraf',
    },
    {
        icon: UserRoundSearchIcon,
        title: 'Poli Obgyn',
        description: 'Menyediakan layanan kesehatan untuk perempuan, terutama untuk kesehatan reproduksi dan kehamilan',
    },
    {
        icon: SpeechIcon,
        title: 'Poli Gigi dan Mulut',
        description: 'Layanan yang menangani kesehatan gigi dan mulut pasien, meliputi pemeriksaan dan pengobatan',
    },
    {
        icon: GitBranchIcon,
        title: 'THT',
        description: 'Menangani gangguan pada organ telinga, hidung, dan mulut, meliputi kepala dan leher',
    },
    {
        icon: PersonStandingIcon,
        title: 'Penyakit Dalam',
        description: 'Layanan yang menangani pasien dengan masalah pada kesehatan organ-organ dalam tubuh',
    },
];

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
                    <div className='h-[410px] w-[770] flex items-center justify-center bg-accent text-accent-foreground text-xs'>disini gambar</div>
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
                        {poli.map((p) => (
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

            {/* Count Up */}
            <section className='max-w-[90rem] mx-auto grid grid-cols-2 place-content-center place-items-center py-10 pl-5'>
                <p className='uppercase tracking-widest font-semibold text-sm w-full'>
                    Kelas <span className='text-primary'>A</span> dan ter-akreditasi <span className='text-tertiary'>paripurna</span> dengan Layanan{' '}
                    <span className='text-quarternary'>terbaik</span>
                </p>
                <div className='flex items-center justify-around w-full'>
                    <CountUp icon={FaUserDoctor} title='Dokter' number={21} />
                    <CountUp icon={Bed} title='Tempat Tidur' number={150} />
                    <CountUp icon={FaHospitalUser} title='Poliklinik' number={18} />
                </div>
            </section>
        </AppLayout>
    );
};

export default Home;

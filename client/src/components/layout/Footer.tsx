import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const social = [
    {
        icon: Instagram,
        url: 'https://www.instagram.com/rs_ernaldi_bahar_prov.sumsel/?hl=en',
    },
    {
        icon: Facebook,
        url: 'https://www.facebook.com/erbahumas.rumahsakit/',
    },
    {
        icon: Phone,
        url: 'tel:+627115645126',
    },
    {
        icon: Mail,
        url: 'mailto:layanan@rs-erba.go.id',
    },
];

const Footer = () => {
    return (
        <footer className='py-5 w-full'>
            <div className='flex justify-between max-w-[90rem] mx-auto border-t border-primary/50 py-5'>
                <div className='text-sm leading-7'>
                    <p className='text-muted-foreground'>&copy;{new Date().getFullYear()} - RS Ernaldi Bahar. Hak Cipta Dilindungi.</p>
                    <p className='text-xs text-muted-foreground'>
                        Made by <span className='font-semibold text-primary'>IT &amp; Komunikasi</span>
                    </p>
                </div>

                <ul className='flex items-center gap-5'>
                    {social.map((item) => (
                        <li className='text-muted-foreground hover:text-foreground transition-colors duration-200' key={item.url}>
                            <a href={item.url} target='_blank' referrerPolicy='no-referrer'>
                                <item.icon className='w-5 h-5 shrink-0' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
export default Footer;

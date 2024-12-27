import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import Header from './Header';

type AppLayoutProps = {
    title: string;
    description?: string;
    canonical?: string;
    children: React.ReactNode;
};

const AppLayout = ({
    title,
    description,
    canonical,
    children,
}: AppLayoutProps) => {
    const desc =
        'Pemulihan adalah sebuah perjalanan, kami menemani Anda setiap langkahnya. Dengan perawatan tepat dan dukungan kuat, Anda akan merasakan perubahan positif dalam hidup.';

    return (
        <>
            <Helmet>
                <title>{title} - Ernaldi Bahar</title>
                <meta name='description' content={description ?? desc} />
                <link
                    rel='canonical'
                    href={import.meta.env.VITE_APP_URL + (canonical ?? '')}
                />
            </Helmet>

            <div className='flex flex-col min-h-svh'>
                <Header />
                <main className='w-full flex-1 bg-background text-foreground max-w-[90rem] mx-auto'>{children}</main>
                <Footer />
            </div>
        </>
    );
};
export default AppLayout;

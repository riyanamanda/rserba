import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';

type AppLayoutProps = {
    title?: string;
    description?: string;
    canonical?: string;
    children: React.ReactNode;
};

const AppLayout = ({ title, description, canonical, children }: AppLayoutProps) => {
    const appname = import.meta.env.VITE_APP_NAME;
    const desc =
        'Melainkan sebuah filosofi hidup yang mencerminkan betapa kompleks dan penuh arti proses untuk kembali pulih, baik secara fisik, mental, maupun emosional.';

    return (
        <>
            <Helmet>
                <title>{title ? `${title} - ${appname}` : appname}</title>
                <meta name='description' content={description ?? desc} />
                <link rel='canonical' href={import.meta.env.VITE_APP_URL + (canonical ?? '')} />
            </Helmet>

            <ToastContainer className='bg-background text-foreground' newestOnTop />

            <div className='flex flex-col min-h-svh overflow-x-hidden'>
                <Header />
                <main className='w-full flex-1 bg-background text-foreground max-w-[90rem] mx-auto py-5'>{children}</main>
                <Footer />
            </div>
        </>
    );
};
export default AppLayout;

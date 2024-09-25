import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='text-slate-900 dark:text-slate-200 bg-white dark:bg-black min-h-screen'>
            <Header />
            <main className='h-full flex-1 max-w-[84rem] mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;

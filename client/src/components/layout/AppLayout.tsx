import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='h-full flex flex-col text-slate-900 dark:text-slate-200 bg-white dark:bg-black px-8'>
            <Header />
            <main className='h-full flex-1 px-6'>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;

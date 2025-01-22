import { ReactNode } from 'react';

type AdminPageLayoutProps = {
    children: ReactNode;
    title: string;
    description: string;
};

const AdminPageLayout = ({ children, title, description }: AdminPageLayoutProps) => {
    return (
        <div className='px-4'>
            <div className='p-3 rounded-lg mt-3'>
                <h1 className='scroll-m-20 leading-relaxed text-xl font-extrabold tracking-tight'>{title}</h1>
                <p className='leading-7 text-muted-foreground text-sm'>{description}</p>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default AdminPageLayout;

import { AppSidebar } from '@/components/layout/admin/AppSidebar';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router';

const CmsLayout = () => {
    return (
        <>
            <Helmet>
                <meta name='robots' content='noindex' />
            </Helmet>

            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className='flex h-16 shrink-0 items-center gap-2 pr-4 justify-between'>
                        <div className='flex items-center gap-2 px-4'>
                            <SidebarTrigger className='-ml-1' />
                        </div>

                        <ModeToggle />
                    </header>

                    <Outlet />
                </SidebarInset>
            </SidebarProvider>
        </>
    );
};

export default CmsLayout;

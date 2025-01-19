import { AppSidebar } from '@/components/layout/admin/AppSidebar';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import { useAuth } from '@/hooks/useAuth';
import { useCookie } from '@/hooks/useCookie';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router';

const CmsLayout = () => {
    const cookie = useCookie();
    const { current } = useAuth();

    useLayoutEffect(() => {
        const token = cookie.getCookie('erba-auth');
        if (token !== undefined) current();
    }, [cookie, current]);
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_NAME}</title>
                <meta name='robots' content='noindex' />
            </Helmet>

            <Toaster />

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

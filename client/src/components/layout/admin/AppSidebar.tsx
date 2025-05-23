import { ChevronRight, ChevronsUpDown, Gauge, GraduationCap, LayoutGrid, LogOut, Newspaper, SquareUser, User, UserPen } from 'lucide-react';
import * as React from 'react';

import { Logo } from '@/assets';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '@/context/authProvider';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { isMobile } = useSidebar();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    };

    return (
        <Sidebar variant='inset' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <NavLink to='/'>
                                <div className='flex aspect-square size-8 items-center justify-center rounded-lg'>
                                    <img src={Logo} alt='Ernaldi Bahar' />
                                </div>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-semibold'>RS Ernaldi bahar</span>
                                    <span className='truncate text-xs'>Admin Area</span>
                                </div>
                            </NavLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* Nav with child */}
                <SidebarGroup>
                    <SidebarGroupLabel>Web Apps</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to='/admin'>
                                    <Gauge />
                                    <span>Dashboard</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href='#'>
                                    <Newspaper />
                                    <span>Posts</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Master</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to='/admin/category'>
                                    <LayoutGrid />
                                    <span>Categories</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <Collapsible asChild defaultOpen={false} className='group/collapsible'>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip='Schools' className='cursor-pointer'>
                                        <GraduationCap />
                                        <span>Schools</span>
                                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton asChild>
                                                <a href='#'>
                                                    <span>Titles</span>
                                                </a>
                                            </SidebarMenuSubButton>

                                            <SidebarMenuSubButton asChild>
                                                <a href='#'>
                                                    <span>Educations</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href='#'>
                                    <User />
                                    <span>Doctors</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Authentication</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href='#'>
                                    <SquareUser />
                                    Users
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size='lg'
                                    className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer'>
                                    <Avatar className='h-8 w-8 rounded-lg'>
                                        <AvatarImage
                                            src={`https://ui-avatars.com/api/?name=Riyan Amanda`}
                                            alt={`Riyan Amanda avatar`}
                                            className='rounded-full'
                                        />
                                    </Avatar>
                                    <div className='grid flex-1 text-left text-sm leading-tight'>
                                        <span className='truncate font-semibold'>Riyan Amanda</span>
                                        <span className='truncate text-xs'>admin@email.com</span>
                                        <div className='truncate text-xs'>
                                            Logged as <span className='font-bold text-primary'>SUPERADMIN</span>
                                        </div>
                                    </div>
                                    <ChevronsUpDown className='ml-auto size-4' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                                side={isMobile ? 'bottom' : 'right'}
                                align='end'
                                sideOffset={4}>
                                <DropdownMenuLabel className='p-0 font-normal'>
                                    <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                                        <Avatar className='h-8 w-8 rounded-lg'>
                                            <AvatarImage
                                                src={`https://ui-avatars.com/api/?name=Riyan Amanda`}
                                                alt={`Riyan Amanda avatar`}
                                                className='rounded-full'
                                            />
                                        </Avatar>
                                        <div className='grid flex-1 text-left text-sm leading-tight'>
                                            <span className='truncate font-semibold'>Riyan Amanda</span>
                                            <span className='truncate text-xs'>admin@email.com</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className='cursor-pointer'>
                                        <UserPen />
                                        Account
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

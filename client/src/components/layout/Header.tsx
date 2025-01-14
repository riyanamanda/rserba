import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { ModeToggle } from '../ModeToggle';
import { Button } from '../ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import { Logo } from '@/assets';

const Header = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <header className='w-full flex items-center py-5 px-8 border-b'>
            <div className='w-2/12'>
                <NavLink to='/' className='flex items-center w-fit space-x-3 group'>
                    <img src={Logo} alt='Ernaldi Bahar' width={50} height={50} />
                    <h1 className='text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-100'>RS Ernaldi Bahar</h1>
                </NavLink>
            </div>

            <div className='flex flex-1 justify-center text-sm'>
                <NavigationMenu>
                    <NavigationMenuList className='gap-5'>
                        <NavigationMenuItem>
                            <NavLink to='/' className='hover:text-primary transition-colors duration-100'>
                                Beranda
                            </NavLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='hover:text-primary transition-colors duration-100'>Tentang</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                    <li>
                                        <NavLink
                                            to='/visi-misi'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Visi dan Misi</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                                Meingkatkan mutu pelayanan kesehatan.
                                            </p>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to='/struktur-organisasi'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Struktur Organisasi</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                                Struktur pemerintahan di rumah sakit ernaldi bahar
                                            </p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavLink to='/layanan' className='hover:text-primary transition-colors duration-100'>
                                Layanan
                            </NavLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavLink to='/berita' className='hover:text-primary transition-colors duration-100'>
                                Berita
                            </NavLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className='ml-auto flex items-center justify-end space-x-3 w-2/12'>
                <ModeToggle />

                {isAuthenticated ? (
                    <NavLink to='/admin'>
                        <Button variant={'default'} size={'sm'}>
                            Dashboard
                        </Button>
                    </NavLink>
                ) : (
                    <NavLink to='/login'>
                        <Button variant={'default'} size={'sm'}>
                            Login
                        </Button>
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;

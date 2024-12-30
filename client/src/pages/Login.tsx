import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NavLink } from 'react-router';

const Login = () => {
    return (
        <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
            <div className='w-full max-w-sm'>
                <div className='flex flex-col gap-6'>
                    <Card>
                        <CardHeader>
                            <div className='flex'>
                                <CardTitle className='text-2xl'>Login</CardTitle>
                            </div>
                            <CardDescription>
                                Silahkan masukan email dan password anda
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form>
                                <div className='flex flex-col gap-6'>
                                    <div className='grid gap-2'>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input
                                            id='email'
                                            type='email'
                                            placeholder='email@example.com'
                                            required
                                        />
                                    </div>

                                    <div className='grid gap-2'>
                                        <div className='flex items-center'>
                                            <Label htmlFor='password'>Password</Label>
                                            <a
                                                href='#'
                                                className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                                                Forgot your password?
                                            </a>
                                        </div>

                                        <Input id='password' type='password' required />
                                    </div>

                                    <Button type='submit' className='w-full'>
                                        Login
                                    </Button>
                                </div>

                                <div className='mt-4 text-center text-[12px] leading-relaxed'>
                                    <NavLink
                                        to='/'
                                        replace={true}
                                        className='font-medium text-primary'>
                                        Kembali
                                    </NavLink>{' '}
                                    - Belum punya akun? <br /> Hubungi IT untuk mendapatkan akun.
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;

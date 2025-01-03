import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { setUserData } from '@/state/auth/authSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email({ message: 'Please input a valid email' }),
    password: z.string().min(6, { message: 'Password at least 6 character(s)' }),
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(setUserData({ email: data.email, role: 'ADMIN', token: '123456' }));
            navigate('/admin', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
            <div className='w-full max-w-sm'>
                <div className='flex flex-col gap-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Login</CardTitle>
                            <CardDescription>Silahkan masukan email dan password anda</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                                    <FormField
                                        {...form.register('email')}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type='text' placeholder='your@email.com' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center'>
                                                    <FormLabel>Password</FormLabel>
                                                    <a href='#' className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                                <FormControl>
                                                    <Input type='password' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type='submit' className='w-full'>
                                        {form.formState.isSubmitting ? 'Loading ...' : 'Login'}
                                    </Button>

                                    <div className='mt-4 text-center text-[12px] leading-relaxed'>
                                        <NavLink to='/' replace={true} className='font-medium text-primary'>
                                            Kembali
                                        </NavLink>{' '}
                                        - Belum punya akun? <br /> Hubungi IT untuk mendapatkan akun.
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;

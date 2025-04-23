import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Loading from '@/components/ui/loading';
import { Toaster } from '@/components/ui/sonner';
import { useAuth } from '@/context/authProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { NavLink, useNavigate } from 'react-router';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string(),
    password: z.string(),
});

type FormProps = z.infer<typeof formSchema>;

const Login = () => {
    const { currentUser, login, pending } = useAuth();
    const navigate = useNavigate();

    const form = useForm<FormProps>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const mutation = useMutation((data: FormProps) => login(data));

    const onSubmit: SubmitHandler<FormProps> = (data) => {
        mutation.mutate(data);
    };

    useLayoutEffect(() => {
        if (currentUser) {
            navigate('/admin/dashboard', { replace: true });
        }
    }
    , [currentUser, navigate]);

    return (
        <>
            <Helmet>
                <title>{import.meta.env.APP_URL}</title>
                <meta name='robots' content='noindex' />
            </Helmet>

            <Toaster />

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
                                                        <Input type='text' placeholder='your@email.com' {...field} tabIndex={1} />
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
                                                        <a href='#' className='ml-auto inline-block text-xs underline-offset-4 hover:underline'>
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                    <FormControl>
                                                        <Input type='password' {...field} tabIndex={2} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type='submit' className='w-full'>
                                            {pending ? <Loading /> : 'Login'}
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
        </>
    );
};

export default Login;

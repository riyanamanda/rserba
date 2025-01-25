import AdminPageLayout from '@/components/layout/admin/AdminPageLayout';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCategory } from '@/hooks/useCategory';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string(),
});

const CreateCategoryPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { createCategory } = useCategory();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof formSchema>) => createCategory(data, form, setIsLoading),
        onError: () => {
            return;
        },
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
        mutation.mutate(data);
    };

    return (
        <AdminPageLayout title='Create Category' description='Form to create a new category'>
            <div className='flex justify-center mt-10 w-4/12 p-5 mx-auto bg-card border rounded-lg'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 w-full'>
                        <FormField
                            {...form.register('name')}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type='text' {...field} tabIndex={1} />
                                    </FormControl>
                                    <FormMessage />

                                    <div className='pt-3 flex items-center justify-end gap-5'>
                                        <Button type='button' variant={'ghost'} size={'sm'} onClick={() => navigate('/admin/category')}>
                                            Cancel
                                        </Button>

                                        <Button
                                            type='submit'
                                            variant={'default'}
                                            size={'sm'}
                                            onClick={() => form.handleSubmit(onSubmit)}
                                            disabled={isLoading}>
                                            {isLoading ? 'Loading ...' : 'Create'}
                                        </Button>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </AdminPageLayout>
    );
};

export default CreateCategoryPage;

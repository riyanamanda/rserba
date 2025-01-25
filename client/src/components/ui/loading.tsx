import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { ComponentProps } from 'react';

const Loading = ({ className }: ComponentProps<'div'>) => {
    return (
        <div className={cn('inline-flex items-center gap-3 w-full justify-center', className)}>
            <Loader2 className='animate-spin' />
            Loading...
        </div>
    );
};

export default Loading;

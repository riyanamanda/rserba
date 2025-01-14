import { LucideIcon } from 'lucide-react';

type LayananProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const Layanan = ({ icon: Icon, title, description }: LayananProps) => {
    return (
        <div className='w-full flex gap-4 items-start p-3'>
            <Icon className='shrink-0 text-primary' />
            <div>
                <h2 className='font-semibold mb-2 text-foreground'>{title}</h2>
                <p className='text-muted-foreground text-sm leading-relaxed'>{description}</p>
            </div>
        </div>
    );
};

export default Layanan;

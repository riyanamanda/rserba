import { ElementType } from 'react';
import { AnimationCounter } from './AnimationCounter';

type CountUpProps = {
    icon: ElementType;
    title: string;
    number: number;
};

const CountUp = ({ icon: Icon, title, number }: CountUpProps) => {
    return (
        <div className='flex flex-col items-center space-y-3 min-w-48 bg-card p-5 rounded-lg'>
            <Icon className='w-10 shrink-0' />
            <AnimationCounter className='text-2xl font-bold text-primary' from={0} to={number} animationOptions={{ ease: 'easeInOut' }} />
            <span className='text-xs font-medium'>{title}</span>
        </div>
    );
};

export default CountUp;

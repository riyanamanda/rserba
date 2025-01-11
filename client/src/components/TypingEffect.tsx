import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type TypingProps = {
    text: string;
    className?: string;
};

export function TypingEffect({ text, className }: TypingProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <p ref={ref} className={cn('text-4xl font-semibold w-8/12 tracking-tight leading-tight', className)}>
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.1 }}>
                    {letter}
                </motion.span>
            ))}
        </p>
    );
}

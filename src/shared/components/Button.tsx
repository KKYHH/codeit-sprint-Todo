import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <>
            <button
                className={twMerge(
                    'bg-slate-200 border-2 border-black shadow-[3px_3px] rounded-2xl p-2',
                    className
                )}
                {...props}
            >
                {children}
            </button>
        </>
    );
}

type ButtonProps = ComponentPropsWithoutRef<'button'>;

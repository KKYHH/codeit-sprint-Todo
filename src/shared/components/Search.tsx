import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Search({ className, ...props }: InputProps) {
    return (
        <>
            <input
                placeholder="할 일을 입력해주세요"
                className={twMerge(
                    'w-full bg-slate-100 border-2 border-black shadow-[3px_3px] rounded-2xl p-2 outline-none',
                    className
                )}
                {...props}
            />
        </>
    );
}

type InputProps = ComponentPropsWithoutRef<'input'>;

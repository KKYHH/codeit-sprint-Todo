'use client';

import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Default from '@devShared/images/Default.svg';
import Check from '@devShared/images/Check.svg';
import Image from 'next/image';

export default function CheckList({
    className,
    children,
    completed,
    onToggle,
    ...props
}: CheckListProps) {
    return (
        <article>
            <div
                className={twMerge(
                    'flex justify-start items-center gap-4 border border-white bg-white rounded-full px-12 py-2',
                    className
                )}
                {...props}
            >
                <div className="relative" onClick={onToggle}>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={onToggle}
                        className="absolute opacity-0 w-0 h-0"
                    />
                    <Image
                        src={completed ? Check : Default}
                        width={20}
                        height={20}
                        alt="checkbox icon"
                        className="cursor-pointer"
                    />
                </div>
                <p className="reg">{children}</p>
            </div>
        </article>
    );
}

type CheckListProps = {
    className?: string;
    children?: React.ReactNode;
    completed: boolean;
    onToggle: () => void;
} & HTMLAttributes<HTMLDivElement>;

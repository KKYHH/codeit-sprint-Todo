'use client';

import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Default from '@devShared/images/Default.svg';
import Check from '@devShared/images/Check.svg';
import Image from 'next/image';

/**
 * CheckList 컴포넌트는 개별 할 일 항목의 UI와 완료 상태를 표시하고 제어하는 컴포넌트입니다.
 * 사용자는 클릭을 통해 체크박스를 선택하거나 해제할 수 있으며, 체크박스 상태에 따라 완료 여부가 토글됩니다.
 * 이 컴포넌트는 완료 여부에 따라 아이콘(체크 아이콘 또는 기본 아이콘)을 조건부로 렌더링하며,
 * 완료된 항목과 미완료 항목의 스타일을 구분하여 사용자 경험을 향상시킵니다.
 * `onToggle` prop은 부모 컴포넌트에서 전달되어 상태 변화를 처리합니다.
 * 이를 통해 상위 컴포넌트에서 관리하는 데이터와 동기화되어 투두 리스트에서
 * 항목을 추가하거나 완료 상태를 변경하는 기능을 제공합니다.
 */

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

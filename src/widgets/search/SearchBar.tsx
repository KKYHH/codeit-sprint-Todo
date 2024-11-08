'use client';

import { useState } from 'react';
import Button from '@dev/shared/components/Button';
import Search from '@dev/shared/components/Search';
import Plus from '@devShared/images/Plus.png';
import Image from 'next/image';

export default function SearchBar({ onAddTodo }: SearchBarProps) {
    const [inputValue, setInputValue] = useState('');
    const [isComposing, setIsComposing] = useState(false);

    const handleAddTodo = () => {
        if (!isComposing && inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isComposing) {
            handleAddTodo();
        }
    };

    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    const handleCompositionEnd = (
        e: React.CompositionEvent<HTMLInputElement>
    ) => {
        setIsComposing(false);
        setInputValue((e.target as HTMLInputElement).value);
    };

    return (
        <section className="flex gap-5 pt-6">
            <Search
                className="flex-1 min-w-0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
            />
            <Button
                className="bg-violet-600 text-white text-[0.8rem] px-6 flex items-center justify-center gap-1"
                onClick={handleAddTodo}
            >
                <Image src={Plus} width={12} height={12} alt="Plus" />
                추가하기
            </Button>
        </section>
    );
}

type SearchBarProps = {
    onAddTodo: (todo: string) => void;
};

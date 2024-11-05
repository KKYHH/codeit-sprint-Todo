import CheckList from '@dev/shared/components/CheckList';
import Done from '@devShared/images/Done.png';
import Image from 'next/image';

export default function DoneList({ todos, onToggle }: DoneListProps) {
    return (
        <div>
            <Image src={Done} width={100} height={100} alt="img" />
            {todos.map((todo, index) => (
                <CheckList key={index} onClick={() => onToggle(index)}>
                    {todo.text}
                </CheckList>
            ))}
        </div>
    );
}

type DoneListProps = {
    todos: { text: string; completed: boolean }[];
    onToggle: (index: number) => void;
};

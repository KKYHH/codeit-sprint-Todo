import CheckList from '@dev/shared/components/CheckList';
import Todo from '@devShared/images/Todo.png';
import Image from 'next/image';

export default function TodoList({ todos, onToggle }: TodoListProps) {
    return (
        <div>
            <Image src={Todo} width={100} height={100} alt="img" />
            <div className="flex flex-col gap-4 pt-8">
                {todos.map((todo, index) => (
                    <CheckList key={index} onClick={() => onToggle(index)}>
                        {todo.text}
                    </CheckList>
                ))}
            </div>
        </div>
    );
}

type TodoListProps = {
    todos: { text: string; completed: boolean }[];
    onToggle: (index: number) => void;
};

import CheckList from '@dev/shared/components/CheckList';
import Todo from '@devShared/images/Todo.png';
import Image from 'next/image';

/**
 * TodoList 컴포넌트는 미완료된 할 일 목록을 렌더링하는 역할을 합니다.
 * 부모 컴포넌트로부터 `todos`와 `onToggle` 함수를 props로 받아,
 * `todos`에 저장된 각 항목을 CheckList 컴포넌트로 표시합니다.
 * 사용자는 각 할 일 항목을 클릭하여 완료 여부를 변경할 수 있으며,
 * 이를 통해 onToggle 콜백이 호출되어 부모 컴포넌트에서 완료 상태가 관리됩니다.
 * 또한, 섹션 상단에 할 일을 상징하는 이미지를 포함하여 사용자가 할 일 목록을 쉽게
 * 인식하고 관리할 수 있도록 합니다.
 */

export default function TodoList({ todos, onToggle }: TodoListProps) {
    return (
        <div>
            <Image src={Todo} width={100} height={100} alt="img" />
            <div className="flex flex-col gap-4 pt-8">
                {todos.map((todo, index) => (
                    <CheckList
                        key={index}
                        completed={todo.completed}
                        onToggle={() => onToggle(index)}
                    >
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

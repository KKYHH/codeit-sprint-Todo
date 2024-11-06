import CheckList from '@dev/shared/components/CheckList';
import Done from '@devShared/images/Done.png';
import Image from 'next/image';

/**
 * DoneList 컴포넌트는 완료된 할 일 목록을 렌더링하는 역할을 합니다.
 * 부모 컴포넌트로부터 `todos`와 `onToggle`을 props로 전달받아,
 * 완료된 항목을 CheckList 컴포넌트로 표시하고 `onToggle`로 완료 상태를 제어합니다.
 * 각 항목은 완료된 상태임을 강조하기 위해 회색 배경과 취소선 스타일로 표시됩니다.
 * 상단에는 완료를 상징하는 이미지를 포함하여, 사용자에게 완료된 작업과 진행 중인 작업의
 * 시각적 구분을 제공하며 효율적으로 할 일을 관리할 수 있도록 돕습니다.
 */

export default function DoneList({ todos, onToggle }: DoneListProps) {
    return (
        <div>
            <Image src={Done} width={100} height={100} alt="img" />
            <div className="flex flex-col gap-4 pt-8">
                {todos.map((todo, index) => (
                    <CheckList
                        key={index}
                        completed={todo.completed}
                        onToggle={() => onToggle(index)}
                        className="bg-violet-100 line-through"
                    >
                        {todo.text}
                    </CheckList>
                ))}
            </div>
        </div>
    );
}

type DoneListProps = {
    todos: { text: string; completed: boolean }[];
    onToggle: (index: number) => void;
};

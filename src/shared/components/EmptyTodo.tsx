import Image from 'next/image';
import Todo from '@devShared/images/Todo.png';
import TodoCharacter from '@devShared/images/TodoCharacter.png';

export default function EmptyTodo() {
    return (
        <div>
            <Image src={Todo} width={100} height={100} alt="img" />
            <div className="pl-36 pt-10">
                <Image src={TodoCharacter} width={250} height={250} alt="img" />
                <p className="text-slate-300">할 일이 없어요.</p>
                <p className="text-slate-300">TODO를 새롭게 추가해주세요!</p>
            </div>
        </div>
    );
}

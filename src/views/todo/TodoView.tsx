import EmptyTodo from '@dev/shared/components/EmptyTodo';
import EmptyDone from '@dev/shared/components/EmptyDone';

export default function TodoView() {
    return (
        <section className="flex pt-14 gap-[20rem] ">
            <EmptyTodo />
            <EmptyDone />
        </section>
    );
}

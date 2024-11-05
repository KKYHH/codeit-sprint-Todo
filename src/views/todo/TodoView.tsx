'use client';

import { useState } from 'react';
import SearchBar from '@devWidgets/search/SearchBar';
import TodoList from '@devWidgets/todo/TodoList';
import DoneList from '@devWidgets/todo/DoneList';
import EmptyTodo from '@dev/widgets/empty/EmptyTodo';
import EmptyDone from '@dev/widgets/empty/EmptyDone';

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (newTodo: string) => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
        }
    };

    const toggleTodoCompletion = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    console.log(todos);

    return (
        <>
            <SearchBar onAddTodo={addTodo} />
            <section className="pt-14 gap-[20rem] flex">
                {activeTodos.length > 0 ? (
                    <TodoList
                        todos={activeTodos}
                        onToggle={toggleTodoCompletion}
                    />
                ) : (
                    <EmptyTodo />
                )}

                {completedTodos.length > 0 ? (
                    <DoneList
                        todos={completedTodos}
                        onToggle={toggleTodoCompletion}
                    />
                ) : (
                    <EmptyDone />
                )}
            </section>
        </>
    );
}

type Todo = {
    text: string;
    completed: boolean;
};

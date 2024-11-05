'use client';

import { useState } from 'react';
import SearchBar from '@devWidgets/search/SearchBar';
import TodoList from '@devWidgets/todo/TodoList';
import DoneList from '@devWidgets/todo/DoneList';

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

    return (
        <>
            <SearchBar onAddTodo={addTodo} />
            <section className="pt-14 gap-[20rem] flex">
                <TodoList todos={activeTodos} onToggle={toggleTodoCompletion} />
                <DoneList
                    todos={completedTodos}
                    onToggle={toggleTodoCompletion}
                />
            </section>
        </>
    );
}

type Todo = {
    text: string;
    completed: boolean;
};

'use client';

import { useState } from 'react';
import SearchBar from '@devWidgets/search/SearchBar';
import TodoList from '@devWidgets/todo/TodoList';
import DoneList from '@devWidgets/todo/DoneList';
import EmptyTodo from '@dev/widgets/empty/EmptyTodo';
import EmptyDone from '@dev/widgets/empty/EmptyDone';

/**
 * TodoView 컴포넌트는 투두 리스트의 전체 뷰를 구성하고 관리하는 상위 컴포넌트입니다.
 * 사용자가 새 할 일을 추가할 수 있는 입력 영역과, 미완료 할 일과 완료된 할 일을 나누어
 * 표시하는 영역으로 구성됩니다.
 * `addTodo` 함수는 사용자가 추가한 새 항목을 저장하고,
 * `toggleTodoCompletion` 함수는 특정 항목의 완료 상태를 토글합니다.
 * 이 컴포넌트는 할 일 목록을 `activeTodos`(미완료 항목)와 `completedTodos`(완료 항목)으로
 * 구분하여 각각 TodoList 및 DoneList 컴포넌트에 전달합니다.
 * 만약 항목이 없으면 빈 화면이 표시되며, 이를 통해 투두 리스트의 상태에 따라 적절한 UI를 제공하여
 * 사용자가 할 일을 효과적으로 관리할 수 있도록 합니다.
 */

export default function TodoView() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (newTodo: string) => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
        }
    };

    const toggleTodoCompletion = (originalIndex: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === originalIndex
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const activeTodos = todos
        .map((todo, index) => ({ ...todo, originalIndex: index }))
        .filter((todo) => !todo.completed);

    const completedTodos = todos
        .map((todo, index) => ({ ...todo, originalIndex: index }))
        .filter((todo) => todo.completed);

    console.log(todos);

    return (
        <>
            <SearchBar onAddTodo={addTodo} />
            <section className="pt-14 gap-[20rem] flex">
                {activeTodos.length > 0 ? (
                    <TodoList
                        todos={activeTodos}
                        onToggle={(index) =>
                            toggleTodoCompletion(
                                activeTodos[index].originalIndex
                            )
                        }
                    />
                ) : (
                    <EmptyTodo />
                )}

                {completedTodos.length > 0 ? (
                    <DoneList
                        todos={completedTodos}
                        onToggle={(index) =>
                            toggleTodoCompletion(
                                completedTodos[index].originalIndex
                            )
                        }
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

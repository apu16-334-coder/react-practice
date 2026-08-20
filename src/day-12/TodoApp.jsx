import { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isComplete: false }
    ])

    const handleAdd = (text) => {
        setTodos(prev => [...prev, { id: Date.now(), text, isComplete: false }])
    }

    const handleDelete = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const handleToggle = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ))
    }

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm onAdd={handleAdd} />
            <TodoList
                todos={todos}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </>
    )
}

export default TodoApp;
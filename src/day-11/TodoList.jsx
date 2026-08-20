import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isComplete: false },
        { id: 2, text: 'Build Issue Tracker UI', isComplete: false }
    ])
    const [inputText, setInputText] = useState('')

    // ADD
    const handleAdd = () => {
        if (!inputText.trim()) return // ignore empty input

        const newTodo = {
            id: Date.now(), // simple unique id
            text: inputText,
            isComplete: false
        }
        setTodos(prev => [...prev, newTodo])
        setInputText('') // clear input after adding
    }

    // TOGGLE COMPLETE
    const handleToggle = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id
                ? { ...todo, isComplete: !todo.isComplete }
                : todo
        ))
    }

    // DELETE
    const handleDelete = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Todo List</h1>

            <div>
                <input
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="Add a todo..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            {todos.length === 0 && <p>No todos yet. Add one above.</p>}

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleToggle(todo.id)}>
                            {todo.isComplete ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <p>{todos.filter(t => t.isComplete).length} of {todos.length} completed</p>
        </>
    )
}

export default TodoList;
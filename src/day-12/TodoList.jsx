import TodoItem from './TodoItem'

// TodoList.jsx — receives todos and handlers as props
function TodoList({ todos, onDelete, onToggle }) {
    if (todos.length === 0) return <p>No todos yet.</p>

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    )
}

export default TodoList;
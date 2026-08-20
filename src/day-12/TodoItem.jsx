// TodoItem.jsx — one todo, calls handlers with its own id
function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <li>
            <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onToggle(todo.id)}>
                {todo.isComplete ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
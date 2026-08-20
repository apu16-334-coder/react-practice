import { useState } from 'react';

// TodoForm.jsx — no state, just calls onAdd
function TodoForm({ onAdd }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text)      // calls parent's handleAdd with the text
        setText('')      // resets its own local input state
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add todo..."
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;
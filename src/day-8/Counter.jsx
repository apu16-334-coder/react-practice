import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount === 0 ? 0 : prevCount - 1)
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <h1>Count: <span>{count}</span></h1>
            <div>
                <button onClick={increaseCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </>
    )
}

export default Counter;
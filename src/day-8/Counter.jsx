import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => ++prevCount);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount === 0 ? 0 : --prevCount)
    }

    const resetCount = () => {
        setCount(prevCount => prevCount = 0);
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
import { useState } from "react";

function Greeting() {
    const [name, setName] = useState('stranger')

    return (
        <>
            <div>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>

            <p>Hello, {name}!</p>
        </>
    )
}

export default Greeting;
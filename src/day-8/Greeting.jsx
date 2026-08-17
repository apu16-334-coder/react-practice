import { useState } from "react";

function Greeting() {
    const [name, setName] = useState('')

    return (
        <>
            <div>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>

            <p>Hello, {name !== '' ? name : 'stranger'}!</p>
        </>
    )
}

export default Greeting;
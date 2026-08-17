import { useState } from "react";

function Toggle() {
    const [isVisible, setIsVisible] = useState(false);

    function toggle() {
        setIsVisible(prevValue => !prevValue)
    }

    const passage = isVisible && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellat, officia odit sapiente ipsum quam tempore molestias dolorum fuga eos, rerum ducimus dicta voluptatum aut atque nulla similique nihil? Exercitationem.</p>

    return (
        <>  
            <div>
                <button onClick={toggle}>{isVisible ? 'Hide Details' : 'Show Details'}</button>
            </div>
            
            {passage}
            
        </>
    )
}

export default Toggle;
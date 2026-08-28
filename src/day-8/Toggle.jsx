import useToggle from "../day-20/hooks/useToggle";

function Toggle() {
    const [isVisible, toggle] = useToggle(false);

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
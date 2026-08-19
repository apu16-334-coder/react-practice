import { useState } from "react";

function LiveCharacterCounter() {
    const [text, setText] = useState('')

    const handleChange = (event) => setText(event.target.value);

    const handleClick = () => setText('');

    let countCharacterMessage, remainingCharacterMessage;

    if (text.length === 0) {
        countCharacterMessage = <p>Start typing...</p>;
        remainingCharacterMessage = null;
    } else {
        countCharacterMessage = <p>{text.length} / 150</p>;

        remainingCharacterMessage = text.length > 130
            ? <p style={{ color: 'red' }}>{150 - text.length} characters remaining</p> 
            : <p>{150 - text.length} characters remaining</p>
        
    }

return (
    <>
        <textarea value={text} rows='7' cols="120" placeholder="Type here..." maxLength={150} onChange={handleChange}></textarea>

        {countCharacterMessage}

        {remainingCharacterMessage}

        <button onClick={handleClick}>clear</button>
    </>
)
}

export default LiveCharacterCounter;
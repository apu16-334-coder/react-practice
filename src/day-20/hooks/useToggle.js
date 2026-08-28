import { useState, useEffect } from "react";

function useToggle(initialValue = false) {
    const [isVisible, setIsVisible] = useState(initialValue);

    function toggle() {
        setIsVisible(prevValue => !prevValue)
    }

    return [isVisible, toggle]
}

export default useToggle;
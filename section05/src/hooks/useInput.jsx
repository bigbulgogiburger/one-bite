import { useState } from "react";   
function useInput(){
    const [input, setInput] = useState("");
    const onChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;
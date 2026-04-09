import { useState, useRef } from 'react';

export const RefExample = () => {
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    function focus() {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <p>Your name is: {name}</p>
            <button onClick={focus}>Focus</button>
        </div>
    );
};
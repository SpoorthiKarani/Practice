import {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        return setCount(prev => prev + 1);
    };

    const handleDecrement = () => {
        return setCount(prev => prev - 1);
    };

    const handleReset = () => {
        return setCount(0);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => handleIncrement}>Increment</button>
            <button onClick={() => handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
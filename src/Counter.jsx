import {useState} from 'react';

export const Counter = ({initialValue = 0}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = ()=> {
    setCount(prev => prev -1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

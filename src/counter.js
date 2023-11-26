// src/Counter.js
import React, { useState } from 'react';
import './counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-text">Counter: {count}</h2>
      <div className="button-container">
        <button className="button" onClick={handleIncrement}>Increment</button>
        <button className="button" onClick={handleDecrement}>Decrement</button>
        <button className="button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

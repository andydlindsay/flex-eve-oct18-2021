import {useState, useRef} from 'react';

const StaleState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;

  const launchAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${countRef.current}`);
    }, 2000);
  };

  return (
    <div>
      <h2>Stale State</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={launchAlert}>Launch Alert</button>
    </div>
  );
};

export default StaleState;

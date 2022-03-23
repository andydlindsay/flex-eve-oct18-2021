import CountContext from "./CountContext";
import {useContext} from 'react';

const ChildTwo = () => {
  const {count, setCount} = useContext(CountContext);

  return (
    <div>
      <h2>This is the ChildTwo</h2>
      <button onClick={() => setCount(count + 1)}>Increment!</button>
    </div>
  );
};

export default ChildTwo;

import CountContext from "./CountContext";
import {useContext} from 'react';

const ChildOne = () => {
  const {count} = useContext(CountContext);

  return (
    <div>
      <h2>This is the ChildOne</h2>
      <h2>The current count is: {count}</h2>
    </div>
  );
};

export default ChildOne;

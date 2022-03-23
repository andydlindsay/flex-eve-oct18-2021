import {useState} from 'react';
// import ChildOne from './ChildOne';
import InBetween from './InBetween';
import ChildTwo from './ChildTwo';
import CountContext from './CountContext';

const Parent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>This is the parent</h2>
      <CountContext.Provider value={{ count, setCount }}>
        {/* <ChildOne /> */}
        <InBetween />
        <ChildTwo />
      </CountContext.Provider>
      
    </div>
  );
};

export default Parent;

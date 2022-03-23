import {useRef, useState} from 'react';

const Focus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef();

  console.log(inputRef);

  const setFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Focus Component</h2>

      <div>
        <input 
          ref={inputRef}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={setFocus}>Set focus on the input field</button>
      </div>
    </div>
  );
};

export default Focus;

import React, {useContext, useState} from 'react';
import MyContext from './MyContext';

export default function ChildComponent() {
  const { value, setValue } = useContext(MyContext);
  const [inputVal, setInputVal] = useState('');

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <div className='container'>
        <h2>Use Context</h2>
      <div>{value}</div>
      <br/>
      <div>
        <input type="text" onChange={handleChange} style={{ width: '80%' }} />
        <button onClick={() => setValue(inputVal)}>Change Intial Text</button>
      </div>
    </div>
  );
}

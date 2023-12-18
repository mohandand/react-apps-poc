import React, {useContext, useState} from 'react';
import MyContext from './MyContext';

export default function ChildComponent(){
    const {value , setValue} = useContext(MyContext);
    console.log('rendered');
    console.log(value);
    const[inputVal, setInputVal] = useState('');

    function handleChange(e){
        setInputVal(e.target.value)
    }
    return(<div>
        <div>{value}</div>
        <div>
            <input type="text" onChange={handleChange} style={{width:'30%'}}/> 
            <button onClick={setValue(inputVal)} >Change Text</button>
        </div>
    </div>)
}
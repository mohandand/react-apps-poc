import React, {useContext} from 'react';
import MyContext from './MyContext';
export default function ChildComponent(){
    const {val , setVal} = useContext(MyContext);

    const[inputVal, setInputVal] = useState('');

    function handleChange(e){
        setVal(e.target.value)
    }
    return(<div>
        {val}
        <div>
            <input type="text" onChange={handleChange}/> 
            <button ocClick={setVal(inputVal)}>Change Text</button>
        </div>
    </div>)
}
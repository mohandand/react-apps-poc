import React, {useState} from 'react';
import './calculator.css'
export default function(){
    const[calc, setCalc] = useState('');
    const [result, setResult] =useState('');

    const operators = ['/','*','-','+','.'];

    function updateCalc(val){
        if((operators.includes(val) && calc === ``) || (operators.includes(val)&&operators.includes(calc.slice(-1))))
        {
            return;
        }
        setCalc(calc + val);
        if (!operators.includes(val)) {
            setResult(eval(calc + val).toString());
          }
    }

    function calculate(){
        setResult(eval(calc).toString());
    }

    function deleteLast(){

    }

    function createDigits(){
        let digits=[];
        for(let i=0;i<=9;i++){
          digits.push( <button onClick={() => {
            updateCalc(i.toString());
          }}>{i}</button>)
        }
        return digits;
    }
    return(
        <div className="appContainer">
            <h3>Calculator</h3>
            <div className="display">
            {result ? <span>{result}</span> : ''}
            {calc || 0}
            </div>
            <div className="operators">
                <button onClick={() => {updateCalc('/')}}>/</button>
                <button onClick={() => {updateCalc('*')}}>*</button>
                <button onClick={() => {updateCalc('-')}}>-</button>
                <button onClick={() => {updateCalc('+')}}>+</button>
                <button onClick={deleteLast}>DEL</button>
            </div>
            <div className='digits'>
                {createDigits()}
                <button onClick={() => {
              updateCalc('.');
            }}>.</button>
                <button onClikc={calculate}>=</button>
            </div>
        </div>
    )
}
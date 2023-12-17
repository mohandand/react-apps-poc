import React,{useState, useRef} from 'react';
import './Accor.css';

export default function Accor({item, contetnt}){
    const [height, setHeight] = useState(0);
    const  contentRef = useRef(null);
    function handleLogic(){
        setHeight(( height === 0 ) ? contentRef.current.scrollHeight : 0)
    }
    return(
        <>
            <div className='item-name' onClick={handleLogic}>
                {item}
            </div>
            <div ref={contentRef} className='item-content' style={{maxHeight : `${height}px`}}>
                {contetnt}
            </div>
        </>
    )
}

//style={{maxHeight : '0px'}}
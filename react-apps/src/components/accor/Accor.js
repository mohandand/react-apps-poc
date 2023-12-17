import React,{useState, useRef} from 'react';
import './Accor.css';

export default function Accor({item, contetnt}){
    const [height, setHeight] = useState(0);

    const  contentRef = useRef(null);
    return(
        <>
            <div className='item-name'>
                {item}
            </div>
            <div ref={contentRef} className='item-content' style={{maxHeight : '0px'}}>
                {contetnt}
            </div>
        </>
    )
}

import React, {useRef, useState} from 'react';


export default function AccordionOne({title, content}){
    const [height, setHieght] = useState('0px')
    const [symbol, setSymbol] = useState('+')
    const conten = useRef(null);

    function handleHeight(){
       setHieght(height === '0px' ? `${conten.current.scrollHeight}px` : '0px');
       setSymbol(height === '0px' ? `-` : '+');
    }

    return(
        <div className="accordionone">
            <div onClick={handleHeight} className='accordionone-button'>
                <div>{title} </div>
                <button>{symbol}</button>
            </div>
            <div ref={conten} className="accrdionone-content" style={{maxHeight : height}}>{content}</div>
        </div>
    )
}



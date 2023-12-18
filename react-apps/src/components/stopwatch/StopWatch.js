import React, {useState} from 'react';

export default function StopWatch(){
    const [time, settime] = useState(0);
    const [start, setStart] = useState(false);

    return(
        <div className='container'>
            <span>00 :</span>
            <span>00 :</span>
            <span>00</span>
        </div>
    )

}

import React, {useState, useEffect} from 'react';
import './trafficlights.css'

export default function TrafficLights(){
    const[currentLight, setCurrentLight] = useState('red');

    // let intervalTime;
    //  if(currentLight === 'red'){
    //     intervalTime = 4000;
    //  } else if(currentLight === 'yellow'){
    //     intervalTime = 2000;
    //  } else {
    //     intervalTime = 5000;
    //  }

    useEffect(() => {
        setInterval(() => {
            switch(currentLight){
                case 'red':
                    setCurrentLight('yellow');
                    break;
                case 'green':
                    setCurrentLight('red');
                    break;
                case 'yellow':
                    setCurrentLight('green');
                    break;
                default:
                    setCurrentLight('red');
                    break;
            }
        }, 2000)
    })
    return(
        <div className='appContainer'>
            <h3>Traffic Lights</h3>
            <div className={`red ${currentLight=== 'red' ? 'active' : ''}`}></div>
            <div className={`yellow ${currentLight === 'yellow'? 'active' : ''}`}></div>
            <div className={`green ${currentLight==='green' ? 'active' : ''}`}></div>
        </div>
    )
}
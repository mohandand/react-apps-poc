import React, {useState, useEffect} from 'react';

export default function StopWatch(){
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    
    useEffect(() => {
        let interval;
        if (start) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 10);
        } else if (!start) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [start]);

   // Hours calculation
   const hours = Math.floor(time / (60*60*100));

   // Minutes calculation
   const minutes = Math.floor((time % (60*60*100)) / (60*100));
 
   // Seconds calculation
   const seconds = Math.floor((time % (60*100)) / 100);
 
   // Milliseconds calculation
   const milliseconds = time % 100;
 
    
    return(
        <div className='container'>
         <div>
            <span>{hours.toString().padStart(2,"0")} :</span>
            <span>{minutes.toString().padStart(2,"0")} :</span>
            <span>{seconds.toString().padStart(2,"0")}</span>
         </div>
         <div className="buttons">
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>       
         </div>
        </div>
    )
}

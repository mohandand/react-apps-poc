import React, {useState} from 'react';
import './draganddrop.css'
export default function DragAndDrop(){
    const intilaData = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8"];
    const [list, setList] = useState(intilaData);
    return(
        <div className="container">
            <h2>Drag And Drop</h2>
            {list.map(((item, index) => {
                return(
                    <div key={index} className='item-container'>
                        {item}
                    </div>
                )
            }))}
        </div>
    )
}
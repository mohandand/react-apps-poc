import React, {useState, useRef} from 'react';
import './draganddrop.css'
export default function DragAndDrop(){
    const intilaData = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8"];
    const [list, setList] = useState(intilaData);

    const dragItem = useRef();
    const dragOverItem = useRef();

    function dragStart(e, dragItemIndex){
        dragItem.current = dragItemIndex;
    }

    function dragEnter(e, dragOverItemIndex){
        dragOverItem.current = dragOverItemIndex;
    }

    function drop(e){
        const copyListItems = [...list];
    }
    return(
        <div className="container">
            <h2>Drag And Drop</h2>
            {list.map(((item, index) => {
                return(
                    <div key={index} className='item-container' draggable 
                    onDragStart={(e) => {dragStart(e,index)}}
                    onDragEnter={(e) => {dragEnter(e,index)}}
                    onDragEnd={drop}>
                        {item}
                    </div>
                )
            }))}
        </div>
    )
}
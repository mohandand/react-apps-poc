import React, {useState, useRef} from 'react';
import './draganddrop.css'
export default function DragAndDrop(){
    const intilaData = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8"];
    const [list, setList] = useState(intilaData);

    const dragItem = useRef();
    const dragOverItem = useRef();

    function dragStart(e, dragItemIndex){
        dragItem.current = dragItemIndex;
        e.target.style.backgroundColor = '#ffd700'; 
    }

    function dragEnter(e, dragOverItemIndex){
        dragOverItem.current = dragOverItemIndex;
    }

    function drop(e){
        const copyListItems = [...list];
        const currentdragItem = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current,0,currentdragItem);
        dragItem.current = null;
        dragOverItem.current = null;
        e.target.style.backgroundColor = null;
        setList(copyListItems);
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

/*Given list = [1,2,3,4,5]
If we move 3 to 1 then the result should be = [3,1,2,4,5]
Step-1: Remove 3 from the list = [1,2,4,5] 
-> to do this = array.splice(index of Dragging item, how many items need to remove) = array.splice(2,1)
Step-2: Now place 3 on to item 1 as we dragged over there
 ->to do this =array.splice(whichweneedtooveride,howmany need to delete,whattooverdie) = array.splice(0,0,3)
 source:
 */
import React, {useState} from 'react';
import './TableOperation.css';

export default function TableOperations(){
    const Data = [
        {id: 1, age: 23, name:"mohan"},
        {id: 2, age: 24, name:"Vinay"},
        {id:3, age:27, name:"Arun"}
    ]
    const [tableData, setTableData] = useState(Data);
    const [sortConfig, setSortConfig] = useState({key: null, direction:`asc`})

    function handleSort(key){
        let direction = 'asc';

        if(sortConfig.key === key && sortConfig.direction === 'asc'){
            direction = 'desc';
        }
        console.log(tableData);
        console.log([...tableData])
        const sortedData = tableData.sort((a,b) => {
            if(a[key] < b[key]){
                return direction === 'asc' ? -1 : 1
            }
            if(a[key]> b[key]){
                return direction === 'des' ? 1 : -1
            }
            return 0;
        })
        setTableData(sortedData);
        setSortConfig({ key, direction });
    }

    return(
        <div>
           <table className="table">
            <thead>
                <tr>
                    <th onClick={() => {handleSort('id')}}>ID</th>
                    <th>Age </th>
                    <th onClick={() => {handleSort('name')}}>Name</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data) => 
                    <tr style={{margin: `5px`}}>
                        <td>{data.id}</td>
                        <td>{data.age}</td>
                        <td>{data.name}</td>
                    </tr>
                )}
            </tbody>
           </table>
        </div>
    )
}

/*
let arr = [4,3,2];
console.log(arr.sort(
    (a,b) => {
    return a-b; //gives 1 means a should come before b
} ))
console.log(arr.sort((a,b) => {
    return b-a; //gives -1 means a should come after b
} ))
*/
import React, {useState} from 'react';

export default function EditableTable(){
    const initialData = [
        { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
        { id: 2, name: 'Jane Doe', position: 'Designer', salary: 60000 },
      ];
    const [data, setData] = useState(initialData);
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChnage(e,key,index){
        let newData = [...data];
        newData[index][key] = e.targte.value;
        setData(newData);
    }

    function handleSave(index){
        setEditIndex(null);
        const editRow = data[index];
        // Update the data state with the edited data
         setData((prevData) => {
         const newData = [...prevData];
        newData[index] = editedRow;
        return newData;
  });
    }

    function handleEdit(index){
        setEditIndex(index)
    }

    return(
        <div className='container'>
            <h2>Editable Table</h2>
            <table className='table'>
                <thead>
                    <th>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Salary</td>
                        <td>Action</td>
                    </th>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr key={item.id}>
                                <td>
                                {
                                        editIndex === index ? (
                                        <input type="text" value={item.name} onChange= {(e) => {handleInputChnage(e,'name',index)}}/>
                                    ) : (item.name)
                                }
                                </td>
                                <td>
                                {
                                        editIndex === index ? (
                                        <input type="text" value={item.position} onChange= {(e) => {handleInputChnage(e,'name',index)}}/>
                                    ) : (item.name)
                                }
                                </td>
                                <td>
                                {
                                        editIndex === index ? (
                                        <input type="text" value={item.salary} onChange= {(e) => {handleInputChnage(e,'name',index)}}/>
                                    ) : (item.name)
                                }
                                 <td>
                                {
                                        editIndex === index ? (
                                        <button onClick={() => {handleSave(index)}}>Save</button>
                                    ) : ( <button onClick={() => {handleEdit(index)}}>Edit</button>)
                                }
                                </td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
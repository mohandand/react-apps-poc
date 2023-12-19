import React, { useState } from 'react';
import './editable-table.css'
export default function EditableTable() {
    const initialData = [
        { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
        { id: 2, name: 'Jane Doe', position: 'Designer', salary: 60000 },
    ];
    const [data, setData] = useState(initialData);
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChnage(e, key, index) {
        let newData = [...data];
        newData[index][key] = e.target.value;
        setData(newData);
    }

    function handleSave(index) {
        setEditIndex(null);
        const editedRow = data[index];
        // Update the data state with the edited data
        setData((prevData) => {
            const newData = [...prevData];
            newData[index] = editedRow;
            return newData;
        });
    }

    function handleEdit(index) {
        setEditIndex(index)
    }

    const handleAdd = () => {
        const newId = data.length + 1;
        setData([...data, { id: newId, name: '', position: '', salary: '' }]);
        setEditIndex(newId - 1);
      };

    return (
        <div className='container'>
            <h2>Editable Table</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {
                                        editIndex === index ? (
                                            <input type="text" value={item.name} onChange={(e) => { handleInputChnage(e, 'name', index) }} />
                                        ) : (item.name)
                                    }
                                </td>
                                <td>
                                    {
                                        editIndex === index ? (
                                            <input type="text" value={item.position} onChange={(e) => { handleInputChnage(e, 'position', index) }} />
                                        ) : (item.position)
                                    }
                                </td>
                                <td>
                                    {
                                        editIndex === index ? (
                                            <input type="text" value={item.salary} onChange={(e) => { handleInputChnage(e, 'salary', index) }} />
                                        ) : (item.salary)
                                    }
                                </td>
                                <td>
                                    {
                                        editIndex === index ? (
                                            <button onClick={() => { handleSave(index) }}>Save</button>
                                        ) : (<button onClick={() => { handleEdit(index) }}>Edit</button>)
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={handleAdd}>Add Row</button>
        </div>
    )
}
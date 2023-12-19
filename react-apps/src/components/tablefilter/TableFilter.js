import React, {useState} from 'react';
import './tablefilter.css';

export default function TableFilter(){
    const intialData=  [
        { id: 1, name: 'John', age: 25, volume: 30 },
        { id: 2, name: 'Jane', age: 30, volume: 40 },
        { id: 3, name: 'Doe', age: 22, volume: 35 },
      ];
      const [tableData, setTableData] = useState(intialData);
      const [searchValue, setSearchValue] = useState('');
      const [selectedColumn, setSelectedColumn] = useState('');

      function handleInputChnage(e){
        setSearchValue(e.target.value);
      }

      function handleSelectValue(e){
        setSelectedColumn(e.target.value);
      }

      function handleFilter(e){
        e.preventDefault();
        let filteredResult = intialData.filter((item) => {
            return item[selectedColumn].toString().includes(searchValue.toString());
        })
        setTableData(filteredResult);
      }

    return(
        <div className='container'>
            <h2>Table Filter</h2>
            <div >
            <form className="filter-area" onSubmit={handleFilter}>
                <select onSelect={handleSelectValue}>
                    <option>Id</option>
                    <option>Name</option>
                    <option>Age</option>
                    <option>Volume</option>
                </select>
                <input type='text' placeholder='Enter value' onChange={handleInputChnage}/>
                <button type="submit">Search</button>
            </form>
            </div>
            <div className='table-area'>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Volume</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((row) => {
                                return (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                        <td>{row.volume}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
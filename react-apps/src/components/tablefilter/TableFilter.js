import React from 'react';

export default function TableFilter(){
    const intialData=  [
        { id: 1, name: 'John', age: 25, volume: 30 },
        { id: 2, name: 'Jane', age: 30, volume: 40 },
        { id: 3, name: 'Doe', age: 22, volume: 35 },
      ];
    return(
        <div className='container'>
            <h2>Table Filter</h2>
            <div className="filter-area">

            </div>
            <div className='table-area'>
                <table>
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
                            intialData.map((row) => {
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
import React, {useState} from 'react';
import MyContext from './MyContext'

export default function MycontextProvider({children}){
    const[value, setValue] = useState('Default Value');

    return(
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>
    )
}
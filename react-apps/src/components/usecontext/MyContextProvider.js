// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

export default function MyContextProvider({ children }) {
  const [value, setValue] = useState('Intial value received from Mycontext Provider');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

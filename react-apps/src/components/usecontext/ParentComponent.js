// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';
import MyContextProvider from './MyContextProvider';

export default function ParentComponent() {
  return (
    <MyContextProvider>
      <ChildComponent />
    </MyContextProvider>
  );
}

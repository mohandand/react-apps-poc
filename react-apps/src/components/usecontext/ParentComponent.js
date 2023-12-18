import React from 'react';
import ChildComponent from './ChildComponent'
import MycontextProvider from './MyContextProvider';

export default function ParentComponent(){
    <MycontextProvider>
        <ChildComponent/>
    </MycontextProvider>
}
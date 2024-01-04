import React, {useState} from 'react';

/*
check below doc for explanantion
https://docs.google.com/document/d/16qUJv-GOo3wFSNgsznq-fvyMhj8_GSLyoOkjV6T0RiI/edit
*/ 

export default function PromiseDemo(){
    const [resultAll, setResultAll] = useState(null)
    const [resultAny, setResultAny] = useState(null)
    const [resultRace, setResultRace] = useState(null)

    const fetch1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data from source-1')
            }, 1500)
        })
    }

    const fetch2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data from source-2')
            }, 1000)
        })
    }

    const fetch3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error while fetching Data from source-3')
            }, 2000)
        })
    }


    function handleAll(){
        Promise.all([fetch1(),fetch2()])
        .then((results) => {
            setResultAll(results)
        })
        .catch((error) => {
            console.log('Error in Promise All', error)
        })
    }

    function handleAny(){
        Promise.any([fetch1(),fetch2(),fetch3()])
        .then((response) => {
            setResultAny(response)
        })
        .catch((error) => {
            console.log('Error in Promise Any', error)
        })
    }

    function handleRace(){
        Promise.race([fetch1(), fetch2(), fetch3()])
        .then((response) => {
            setResultRace(response)
        })
        .catch((error) => {
            console.log('Error in Promise Race', error)
        })
    }

    return(
        <div class="container">
            <h2>Promise Demonstration</h2>
            <button onClick={handleAll}>PromiseAll</button>
            <button onClick={handleAny}>PromiseAny</button>
            <button onClick={handleRace}>PromiseRace</button>
            <div>
                <h4>Results:</h4>
                <p>Promise.ALL - {resultAll ? resultAll.join('') : 'N/A'}</p>
                <p>Promise.Any- {resultAny || 'N/A'}</p>
                <p>Promise.Race- {resultRace || 'N/A'}</p>
            </div>
        </div>
    )
}
import React from 'react';
import fetchHOC from './fetchHOC'

const DataDisplayComponent = ({ data, loading, error }) => {
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <div>Data: {JSON.stringify(data)}</div>;
  };
  
  // Define a function to fetch data from a placeholder API (replace with actual API endpoint)
  const fetchDataFromAPI = async () => {
    const response = await fetch('https://jsonplaceholdezr.typicode.com/todos/1');
    return response;
  };
  
  // Apply the withFetchData HOC to DataDisplayComponent using fetchDataFromAPI function
  const DataComponentWithFetch = fetchHOC(DataDisplayComponent, fetchDataFromAPI);

  export default DataComponentWithFetch;
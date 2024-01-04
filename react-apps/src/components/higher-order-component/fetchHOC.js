import React, { useState, useEffect } from 'react';

export default function fetchHOC(WrappedComponent, fetchDataFn){
  // Return a new functional component called FetchDataComponent
  return function FetchDataComponent() {
    const [data, setData] = useState(null);      // To store fetched data
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null);     // To store any fetch error

    // Use the useEffect hook to execute code after component mounts or when dependencies change
    useEffect(() => {
      // Define an asynchronous function fetchData to handle data fetching
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetchDataFn();
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [fetchDataFn]); // The dependency array ensures that the effect runs when fetchDataFn changes

    // Return the WrappedComponent with additional props (data, loading, error)
    return <WrappedComponent  data={data} loading={loading} error={error} />;
  };
}
import React from 'react';
import useFetch from './useFetch';
function DataFetchingComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data'); // use always top level 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default DataFetchingComponent;

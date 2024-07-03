// - Built-in JavaScript function for making HTTP requests.
// Pros:
// - Native: Built into modern browsers, no need for external libraries.
// - Promises: Uses Promises, providing a more modern and cleaner syntax.
// - Streaming: Supports streaming responses natively.

// Cons:
// - Verbose: Requires more boilerplate code for handling common scenarios like setting headers, timeouts, etc.
// - No Built-in Support for Interceptors: Cannot easily manipulate requests or responses globally.
// - No Automatic JSON Transform: Need to manually transform JSON responses.
// - Error Handling: Does not throw errors for HTTP errors (e.g., 404, 500), you have to handle it manually.


import React, { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);

    } catch (error) {
      setError(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchExample;

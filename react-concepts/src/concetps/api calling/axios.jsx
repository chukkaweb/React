
// npm install axios
// - A popular library for making HTTP requests
// - Ideal for more complex HTTP requests and better control over request configuration.

// Pros:
// - Simpler Syntax: Cleaner and more concise syntax.
// - Automatic JSON Transform: Automatically transforms JSON responses.
// - Interceptors: Allows setting up interceptors for requests and responses.
// - Timeouts: Easier to set up and manage request timeouts.
// - Node.js: Works in Node.js as well, making it a versatile option for both client and server-side code.
// - Cancellation: Supports request cancellation.
//   Browser Compatibility:- Axios handles older browsers better and includes polyfills for them.


// Cons:
// - Extra Dependency: Requires installing an additional library.
// - Larger Bundle Size: Adds to the bundle size of your application compared to using fetch`.


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
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
export default Axios;

// Tips for Making API Calls in React
// 1. Error Handling: Always handle errors gracefully to improve the user experience.
// 2. Loading State: Manage loading state to provide feedback to the user while data is being fetched.
// 3. Cleanup: If your component may unmount before the API call completes, consider using a cleanup function to prevent setting state on an unmounted component.

// Conclusion
// - Use fetch` if you prefer a built-in solution with no additional dependencies and you have relatively simple HTTP request needs.
// - Use axios` if you require a more feature-rich HTTP client with better syntax, automatic JSON handling, interceptors, and support for complex request configurations.








// Custom hooks are a powerful feature of React that help you write cleaner, more reusable, and maintainable code.
// Custom hooks in React allow you to encapsulate and reuse logic across multiple components
// Encapsulate and share logic between components without relying on higher-order components or render props.


// Benefits of Custom Hooks

// Code Reusability
// Separation of Concerns:
//    - Custom hooks help separate logic from UI, making components cleaner and easier to manage.
// 3. Testing:
//    - Custom hooks can be individually tested, improving the testability of your code.
// 4. Maintainability:
//    - Encapsulating logic in custom hooks makes your codebase more maintainable and easier to understand.

import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);

      } catch (error) {
        setError(error);
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, [url]);
  return { data, loading, error };
}
export default useFetch;

// Custom Hook Rules
// 1. Start with "use": useFetch , useStorage , useTrim
//    - Always start your custom hook's name with "use" to follow React's convention and enable automatic hook checks.
// 2. Call Hooks at the Top Level:
//    - Call hooks at the top level of your custom hook, not inside loops, conditions, or nested functions.
// 3. Use Built-in Hooks:
//    - Leverage React's built-in hooks (`useState`,useEffect`, etc.) within your custom hooks to encapsulate complex logic.




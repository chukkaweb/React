// Memoizes a value, recomputing it only when its dependencies change. Useful for performance optimization.

import React, { useMemo, useState } from 'react';
function ExpensiveCalculationComponent({ num }) {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
	return num * 2; // Suppose this is an expensive calculation
  }, [num]);
  
  return (
	<div>
  	<p>Expensive Calculation Result: {expensiveCalculation}</p>
  	<button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
	</div>
  );
}
export default ExpensiveCalculationComponent;

// - `useMemo` returns a memoized value.
// - The function passed to `useMemo` runs only when its dependencies (`num` in this case) change.

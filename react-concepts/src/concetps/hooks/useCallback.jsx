// Memoizes a callback function, preventing its recreation on every render unless its dependencies change. Useful for performance optimization.

import React, { useState, useCallback } from 'react';

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

function UCB() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
	setCount((prevCount) => prevCount + 1);
  }, []);

  return (
	<div>
  	<p>Count: {count}</p>
     	<Button handleClick={increment} />
	</div>
  );
}
export default UCB;  

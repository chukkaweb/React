import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // need to below 3 lines of code in function for clean code .
	fetch('https://api.example.com/data')
  	.then(response => response.json())
  	.then(data => setData(data));
  }, []); // The empty array means this effect runs once, similar to componentDidMount

  return (
	<div>
    	{ data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
	</div>
  );
}
export default DataFetcher;

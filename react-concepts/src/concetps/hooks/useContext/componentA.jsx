// Provides a way to pass data through the component tree without manually passing props at every level.

import * as React from 'react';
// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext();

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and count updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      {...props.children}
    </CountContext.Provider>
  );
}
export default CountProvider;
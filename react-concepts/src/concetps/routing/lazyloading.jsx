// Lazy loading is a technique that allows you to load components or resources only when they are needed, 
// lazy loading is particularly useful for code splitting, which helps to reduce the size of the initial JavaScript bundle by splitting it into smaller chunks that are loaded on demand.

// # Key Concepts of Lazy Loading
// 1. Code Splitting: Breaking up your code into smaller bundles that can be loaded asynchronously.
// 2. React.lazy: A built-in function in React for lazy loading components.
// 3. Suspense: A component that lets you specify a loading fallback while the lazy-loaded component is being fetched.

// Lazy Loading the Component in Another File
import React, { Suspense, lazy } from 'react';
const UserProfile = lazy(() => import('./UserProfile'));
const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
};
export default App;

// Lazy Loading Routes
// Lazy loading can also be applied to routes in a React application usingreact-router-dom`.
// Example: Lazy Loading Routes
// // App.js
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));
// const App1 = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };
// export default App1;

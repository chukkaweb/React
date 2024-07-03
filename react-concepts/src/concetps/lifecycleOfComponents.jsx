// 	Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
// 	Mounting: Mounting is the stage of rendering the  returned by the render method itself.
// 	Updating: Updating is the stage when the state of a component is updated and the application is repainted.
// 	Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
// 	Component did mount and will mount call once


// Lifecycle Methods in Class Components
// - componentDidMount: Invoked immediately after a component is mounted. Good for initial data fetching.
// - componentDidUpdate: Invoked immediately after updating occurs. Good for reacting to prop or state changes.
// - componentWillUnmount: Invoked immediately before a component is unmounted and destroyed. Good for cleanup tasks.

// Example: Lifecycle Methods
// class MyComponent extends Component {
//   componentDidMount() {
//     console.log('Component did mount');
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update');
//   }
//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }
//   render() {
//     return <div>My Component</div>;
//   }
// }


//  Functional Components and Hooks
// React Hooks provide a way to use state and other React features without writing a class.
// - useState: For managing state in functional components.
// - useEffect: For performing side effects like data fetching, subscriptions, or manually changing the DOM.

// Example: Using useEffect Hook
// import React, { useState, useEffect } from 'react';
// const DataFetcher = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);
//   return (
//     <div>
//       {data ? <p>Data: {data}</p> : <p>Loading...</p>}
//     </div>
//   );
// };
// export default DataFetcher;
 
// Summary
// - Functional Components: Simple, use functions and React Hooks for state and side effects.
// - Class Components: More complex, use ES6 classes,this` keyword, and lifecycle methods.
// - Lifecycle Methods: Available in class components for handling component mount, update, and unmount phases.
// - Hooks: Available in functional components for managing state (`useState`) and side effects (`useEffect`).
 

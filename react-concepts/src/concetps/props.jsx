// Props are inputs to a component that allow data to be passed from parent to child components. They are read-only.
// Example:
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
// <Greeting name="ganesh chukka" />

// alternative props sytaxes 

// Destructured Props
// Description: Props can be destructured directly in the function parameter for cleaner syntax.

// import React from 'react';
// const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
// export default Greeting;

// I.e., instead of

// <CoreConcept
//   title={CORE_CONCEPTS[0].title}
//   description={CORE_CONCEPTS[0].description}  
//   image={CORE_CONCEPTS[0].image} />
// or

// <CoreConcept
//   {...CORE_CONCEPTS[0]} />
// you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:

// <CoreConcept
//   concept={CORE_CONCEPTS[0]} />
// In the CoreConcept component, you would then get that one single prop:

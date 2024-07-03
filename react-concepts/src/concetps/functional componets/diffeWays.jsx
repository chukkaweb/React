// 1. Traditional Function Declaration
// Description: This is the simplest way to define a functional component using a function declaration.
// Example:
// import React from 'react';
// function Greeting() {
//   return <h1>Hello, World!</h1>;
// }
// export default Greeting;


//  2. Function Expression
// Description: You can also define a functional component using a function expression and assign it to a constant.
// Example:
// import React from 'react';
// const Greeting = function() {
//   return <h1>Hello, World!</h1>;
// };
// export default Greeting;


//  3. Arrow Function
// Description: Arrow functions provide a concise way to write functional components.
// Example:
// import React from 'react';
// const Greeting = () => {
//   return <h1>Hello, World!</h1>;
// };
// export default Greeting;


//  4. Implicit Return in Arrow Function
// Description: If the component’s return statement fits in one line, you can use an implicit return.
// Example:
// import React from 'react';
// const Greeting = () => <h1>Hello, World!</h1>;
// export default Greeting;


// 	5. With Props
// Description: Functional components often receiveprops`, which can be used to pass data.
// Example:
// import React from 'react';
// const Greeting = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };
// export default Greeting;


//  6. Destructured Props
// Description: Props can be destructured directly in the function parameter for cleaner syntax.
// Example:
// import React from 'react';
// const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
// export default Greeting;

//  7. Using Default Parameters
// Description: You can provide default values for props in the function parameter.
// Example:
// import React from 'react';

// const Greeting = ({ name = 'World' }) => <h1>Hello, {name}!</h1>;
// export default Greeting;

//  8. React.memo
// Description: To optimize performance by preventing unnecessary re-renders, you can wrap a functional component withReact.memo`.
// Example:
// import React from 'react';
// const Greeting = React.memo(({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// });
// export default Greeting;

//  9. TypeScript
// Description: If you're using TypeScript, you can type the props for better type checking.
// Example:
// import React from 'react';
// interface GreetingProps {
//   name: string;
// }
// const Greeting: React.FC<GreetingProps> = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };
// export default Greeting;


//  10. Hooks Usage
// Description: You can use hooks likeuseState` oruseEffect` within functional components.
// Example:
// import React, { useState, useEffect } from 'react';
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title =You clicked ${count} times`;
//   }, [count]);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };
// export default Counter;



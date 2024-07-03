// You can read query parameters using the useLocation` hook from react-router-dom`.

// getting query parameters 
import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const query = useQuery();
  const name = query.get('name');
  const age = query.get('age');

  return (
    <div>
      <h1>Home</h1>
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
    </div>
  );
};
export default Home;

// setting query parameters 
// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const About = () => {
//   const history = useHistory();
//   const updateQuery = () => {
//     history.push('/about?name=John&age=30');
//   };

//   return (
//     <div>
//       <h1>About</h1>
//       <button onClick={updateQuery}>Update Query Params</button>
//     </div>
//   );
// };
// export default About;

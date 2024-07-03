import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {

  const query = useQuery();
  const history = useHistory();

  const [name, setName] = useState(query.get('name') || '');
  const [age, setAge] = useState(query.get('age') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (name) params.append('name', name);
    if (age) params.append('age', age);
    history.push({ search: params.toString() });
  }, [name, age, history]);


  return (
    <div>
      <h1>Home</h1>

      <div><label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
      </div>

      <div>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      
    </div>
  );
};
export default Home;

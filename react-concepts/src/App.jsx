import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './config/routesConfig';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          {routes.map((route, index) => (
              <Route key={index} {...route} />
          ))}
      </Routes>
    </BrowserRouter>  
  );
}
export default App;

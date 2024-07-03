import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './state/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const id:any = document.getElementById('root');
const root = ReactDOM.createRoot(id);
root.render(
  <Provider store={store}>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
    <App />
  </Provider>
);

reportWebVitals();

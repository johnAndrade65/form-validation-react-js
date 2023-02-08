import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Local onde o componente App será renderizado
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


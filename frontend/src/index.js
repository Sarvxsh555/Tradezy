import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './landing_page/home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage/>
  </React.StrictMode>
);

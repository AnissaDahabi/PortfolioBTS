import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/StyleSheets/style.css';
import MainPage from './Components/MainPage.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MainPage />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

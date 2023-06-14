import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OpenMenuStorage } from './contexts/menuContext';
import { CategoryProvider } from './contexts/categoryContext';
import { SearchProvider } from './contexts/searchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenMenuStorage>
      <CategoryProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CategoryProvider>
    </OpenMenuStorage>
  </React.StrictMode>
);
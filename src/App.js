import { useEffect } from 'react';
import React from 'react';

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return(
    <div className="app">
      <h1>Cinema World</h1>
      <input 
        placeholder='Search for Movies'
      />
    </div>
  );
}

export default App;
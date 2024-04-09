import { useEffect } from 'react';

import React from 'react';

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
    <h1>App</h1>
  );
}

export default App;
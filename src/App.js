import { useEffect, useState } from 'react';
import React from 'react';

import MovieCard from './MovieCard';

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return(
    <div className='app'>
      <h1>Cinema World</h1>

      <div className='search'>
        <input 
          placeholder='Search for Movies'
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
      )}

    </div>
  );
}

export default App;
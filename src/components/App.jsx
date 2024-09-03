import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './Movie';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    // Example movie objects
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://example.com/inception.jpg', rating: 9 },
    { title: 'Interstellar', description: 'A journey beyond the stars', posterURL: 'https://example.com/interstellar.jpg', rating: 8 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.rating === parseInt(rating))
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

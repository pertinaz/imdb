
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/popular');
        setMovies(response.data.results);

        const transformedMovies = response.data.results.map(movie =>({
          ...movie,
          title: movie.title.replace(/ /g,'-').toLowerCase()
        }));

        setMovies(transformedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}-${movie.title}`}>{movie.title.replace(/-/g,' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

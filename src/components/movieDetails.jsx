
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error(`Error fetching movie details for id ${id}:`, error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  );
};

export default MovieDetail;

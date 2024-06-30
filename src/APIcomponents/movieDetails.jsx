import '../StyleComponents/details.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await AxiosInstance.get(`/movie/${id}`);
        setMovie(response.data);
        console.log(response.data);
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
    <div className='details'>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  );
};

export default MovieDetail;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await AxiosInstance.get('/tv/popular');
        setShows(response.data.results);
      } catch (error) {
        console.error('Error fetching tv show:', error);
      }
    };

    fetchShow();
  }, []);

  return (
    <div>
      <h2>Popular TV Shows</h2>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt={show.title} />
            <Link to={`/tv/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowsList;

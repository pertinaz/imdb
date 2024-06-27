
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axiosInstance.get('/tv/popular');
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
        {shows.map(tv => (
          <li key={tv.id}>
            <Link to={`/tv/${tv.id}`}>{tv.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowsList;

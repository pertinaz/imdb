
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../APIcomponents/axiosInstance';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axiosInstance.get('/tv/popular');
        setShows(response.data.results);

        const transformedTVShows = response.data.results.map(show =>({
          ...show,
          name: show.name.replace(/ /g,'-').toLowerCase()
        }));

        setShows(transformedTVShows);
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
            <Link to={`/tv/${show.id}-${show.name}`}>{show.name.replace(/-/g,' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowsList;

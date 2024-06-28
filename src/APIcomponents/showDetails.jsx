
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const ShowDetail = () => {
  const { id, name } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await axiosInstance.get(`/show/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error(`Error fetching movie details for id ${id}:`, error);
      }
    };

    fetchShowDetail();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <p>Rating: {show.vote_average}</p>
      <p>Release Date: {show.release_date}</p>
      <p>Overview: {show.overview}</p>
    </div>
  );
};

export default ShowDetail;

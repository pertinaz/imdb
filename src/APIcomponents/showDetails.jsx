
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await axiosInstance.get(`/tv/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error(`Error fetching movie details for id ${id}:`, error);
      }
    };

    fetchShowDetail();
  }, [id]);

  if (!tv) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{tv.title}</h2>
      <p>Rating: {tv.vote_average}</p>
      <p>Release Date: {tv.release_date}</p>
      <p>Overview: {tv.overview}</p>
    </div>
  );
};

export default ShowDetail;

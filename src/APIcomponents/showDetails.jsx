
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

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

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <p>Rating: {show.vote_average}</p>
      <p>Release Date: {show.first_air_date}</p>
      <p>Overview: {show.overview}</p>
    </div>
  );
};

export default ShowDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const PersonDetail = () => {
  const { id, name } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPersonDetail = async () => {
      try {
        const response = await axiosInstance.get(`/person/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error(`Error fetching celebritie details for id ${id}:`, error);
      }
    };

    fetchPersonDetail();
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Gender: {person.gender}</p>
      <p>Birthday: {person.birthday}</p>
      <p>Popularity: {person.popularity}</p>
      <p>Biography: {person.biography}</p>
    </div>
  );
};

export default PersonDetail;

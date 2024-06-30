
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';

const PersonDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPersonDetail = async () => {
      try {
        const response = await AxiosInstance.get(`/person/${id}`);
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
      <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt={person.name} />
      <h2>{person.name}</h2>
      <p>Gender: {person.gender}</p>
      <p>Birthday: {person.birthday}</p>
      <p>Popularity: {person.popularity}</p>
      <p>Biography: {person.biography}</p>
    </div>
  );
};

export default PersonDetail;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axiosInstance.get('/person/popular');
        setPeople(response.data.results);

        const transformedPeople = response.data.results.map(person =>({
          ...person,
          name: person.name.replace(/ /g,'-').toLowerCase()
        }));

        setPeople(transformedPeople);
      } catch (error) {
        console.error('Error fetching celebrity:', error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>Popular Celebrities</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`person/${person.id}-${person.name}`}>{person.name.replace(/-/,' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
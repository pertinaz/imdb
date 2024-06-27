import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axiosInstance.get('/trending/person');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching celebrity:', error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>Trending Celebrities</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
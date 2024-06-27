import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from "../APIcomponents/movies";
import ShowsList from "../APIcomponents/shows";
import PeopleList from "../APIcomponents/people";

function ContentMainPage() {
  return (        
        <MovieList />,
        <ShowsList />,
        <PeopleList />
  );
}

export default ContentMainPage;
import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from "../APIcomponents/movies";
import ShowsList from "../APIcomponents/shows";
import PeopleList from "../APIcomponents/people";
import Home from "../APIcomponents/home";

function ContentMainPage() {
  return ( 
    <div>
        <Home />,       
        <MovieList />,
        <ShowsList />,
        <PeopleList />
    </div>
  );
}

export default ContentMainPage;
import React from "react";
import { Link } from 'react-router-dom';
import MovieList from "../APIcomponents/Movies";
import ShowsList from "../APIcomponents/Shows";
import PeopleList from "../APIcomponents/People";
import Home from "../APIcomponents/Home";


function ContentMainPage() {
  return ( 
    <div>
        <Home />
    </div>
  );
}

export default ContentMainPage;
import React from "react";
import { Router } from "react-router-dom";
import PersonDetail from "../APIcomponents/movieDetails";
import MovieList from "../APIcomponents/Movies";
function CardMovie() {
    return (
    <Router>
        <MovieList />
    </Router>
    );
}

export default CardMovie;
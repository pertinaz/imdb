
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import MovieDetails from './PagesComponents/ContentDetails';
import ContentSearchPage from './PagesComponents/ContentSearchPage';
import Home from './APIcomponents/Home';
import ContentDetails from '../src/PagesComponents/ContentDetails';
import SearchBar from './PagesComponents/SearchBar';
import MovieList from './APIcomponents/Movies';

const App = () => {
  return (
    <Router>
        <SearchBar />
        <ContentMainPage />
      <Routes>
        <Route path="/movies/popular" component={CardMovie} />
      </Routes>
    </Router>
  );
};

export default App;

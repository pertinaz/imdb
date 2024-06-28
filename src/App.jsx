
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import MovieDetails from './PagesComponents/ContentDetails';
import ContentSearchPage from './PagesComponents/ContentSearchPage';
import Home from '../src/APIcomponents/home';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Loading...</h1>
      </div>
      <div>
        <ContentMainPage />
      </div>
    </Router>
  );
};

export default App;

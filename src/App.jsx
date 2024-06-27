
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import MovieDetails from './PagesComponents/ContentDetails';
import ContentSearchPage from './PagesComponents/ContentSearchPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={ContentMainPage} />
        <Route path="/movies" exact Component={CardMovie} />
        <Route path="/search" exact Component={ContentSearchPage} />
      </Routes>
    </Router>
  );
};

export default App;

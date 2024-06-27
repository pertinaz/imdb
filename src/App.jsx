
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={MovieList} />
          <Route path="/movies/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

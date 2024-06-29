
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import CardShow from './PagesComponents/CardShow'
import SearchBar from './PagesComponents/SearchBar';
import CardPeople from './PagesComponents/CardPeople';
import PersonDetail from './APIcomponents/PersonDetails';
import ShowDetail from './APIcomponents/ShowDetails';
import MovieDetail from './APIcomponents/MovieDetails';

 
const App = () => {
  return (
    <Router>
        <SearchBar />
        <ContentMainPage />
      <Routes>
        <Route path="/movies/popular" element={<CardMovie/>} />
        <Route path="/tv/popular" element={<CardShow />} />
        <Route path="/person/popular" element={<CardPeople />} />
        <Route path='/person/:id' element={<PersonDetail/>}/>
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

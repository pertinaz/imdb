
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import CardShow from './PagesComponents/CardShow'
import SearchBar from './PagesComponents/SearchBar';
import CardPeople from './PagesComponents/CardPeople';
import PersonDetail from './APIcomponents/PersonDetails';

 
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
      </Routes>
    </Router>
  );
};

export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentMainPage from './PagesComponents/ContentMainPage';
import CardMovie from './PagesComponents/CardMovie';
import SearchBar from './PagesComponents/SearchBar';
import ShowList from './APIcomponents/Shows';
import PeopleList from './APIcomponents/People';
import PersonDetail from './APIcomponents/PersonDetails';
 
const App = () => {
  return (
    <Router>
        <SearchBar />
        <ContentMainPage />
      <Routes>
        <Route path="/movies/popular" element={<CardMovie/>} />
        <Route path="/tv/popular" element={<ShowList/>} />
        <Route path="/person/popular" element={<PeopleList />} />
        <Route path='/person/:id' element={<PersonDetail/>}/>
      </Routes>
    </Router>
  );
};

export default App;

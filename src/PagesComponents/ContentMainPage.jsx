

import MovieList from "../APIcomponents/Movies";
import PeopleList from "../APIcomponents/People";
import Home from "../APIcomponents/Home";


function ContentMainPage() {
  return ( 
    <div>
        <Home />
        <MovieList />
        <PeopleList />
    </div>
  );
}

export default ContentMainPage;
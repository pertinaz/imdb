import React from "react";
import '../css/SearchBar.css'

function SearchBar() {
    return (
        <div className="search-bar">
            <select>
                <option>Movie</option>
                <option>People</option>
                <option>TV Show</option>
            </select>
            <input type="text" placeholder="Search..." />
            <button className="search-icon">Search</button>
        </div>
    );
}

export default SearchBar;
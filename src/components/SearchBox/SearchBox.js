import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchField,searchChange}) => {
    return (
        <div className="sbox">
            <ion-icon id="searchIcon" name="search-outline"></ion-icon>
            <input type="text" placeholder="Search for a Country..." onChange={searchChange}/>
            
        </div>
    )
}

export default SearchBox;
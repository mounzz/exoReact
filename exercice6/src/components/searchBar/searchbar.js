import React from "react";
import './searchbar.css';

class SearchBar extends React.Component{
    render(){
        return(
        <div className="containerBar">
            <div className="boutons">
                <button className="bouton">link 1</button>
                <button className="bouton">link 2</button>
                <button className="bouton">link 3</button>
            </div>
            <div className="searchBar">
                    <label>Search:</label> <input></input><button className="sbButton">go</button>
            </div>
        </div>
        );
        
    }
}

export default SearchBar
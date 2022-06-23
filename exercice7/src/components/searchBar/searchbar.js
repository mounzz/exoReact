import React from "react";
import './searchbar.css';

class SearchBar extends React.Component{
    navigation = (destination) => {
        console.log(destination);
    }

    render(){
        return(
        <div className="containerBar">
            <div className="boutons">
                <button onClick={() => this.navigation("Accueil")} className="bouton">link 1</button>
                <button onMouseOver={() => this.navigation("Galerie")} className="bouton">link 2</button>
                <button onDoubleClick={() => this.navigation("Contacts")} className="bouton">link 3</button>
            </div>
            <div className="searchBar">
                    <label>Search:</label> <input></input><button className="sbButton">go</button>
            </div>
        </div>
        );
        
    }
}

export default SearchBar
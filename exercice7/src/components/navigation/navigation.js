import React from "react";
import SearchBar from "../searchBar/searchbar";
import './navigation.css';

class Navigation extends React.Component{
    render(){
        return(
            
            <div className="navigation">
                    <SearchBar/>
            </div>
        
        );
        
    }
}

export default Navigation
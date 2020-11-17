  
import React from "react";
import "./style.css";


function SearchForm(props) {
    return (
    
        <form className="search">
          <div className="form-group">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              placeholder="Type in a search term to begin"
              id="search"
            />
            
          </div>
        </form>

     
      );
}

export default SearchForm;

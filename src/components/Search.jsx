import React, { useState } from "react";

export function Search ({searchMovies}) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === 'Enter') {
        searchMovies(search, type);
    }
  };
  const handleFilter = (event) => {
    const newType = event.target.dataset.type
    setType(newType)
    searchMovies(search, newType)
  };
 
    return <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={search}
              onChange={(e) => setSearch (e.target.value )}
              onKeyDown={handleKey}
            />
            <button className="btn search-btn violet accent-1"
            onClick={() => searchMovies(search, type)}>
            Search </button>
          </div>
          <div>
            <label>
                <input 
                class="with-gap" 
                name="type" 
                type="radio" 
                data-type="all"
                onChange = {handleFilter}
                checked = {type === "all"}
                />
                <span>All</span>
            </label>
            <label>
                <input 
                class="with-gap"
                name="type" 
                type="radio"
                data-type="movie"
                onChange = {handleFilter}
                checked = {type === "movie"}
                />
                <span>Movies only</span>
            </label>
            <label>
                <input 
                class="with-gap"
                name="type" 
                type="radio"
                data-type="series"
                onChange = {handleFilter}
                checked = {type === "series"}
                />
                <span>Series only</span>
            </label>
        </div>
        </div>
      </div>
  }




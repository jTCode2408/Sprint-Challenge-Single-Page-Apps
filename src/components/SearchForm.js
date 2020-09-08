// import React, { useState } from "react";

// export default function SearchForm() {
 
//   return (
//     <section className="search-form">
//      // Add a search form here
//     </section>
//   );
// }


import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";

export default function SearchForm() {

  const [names, setNames] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const search = response.data.results;
        console.log(response.data.results);
        const result = search.filter(character =>
        
          character.name
            .toLowerCase()
            .includes(query.toLowerCase())
        );
        setNames(result);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="name-search">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="search-return">
        {names.map(name => {
          return (
            <div
              className="char-search"
              key={name.id}
            >
              <p>
               
                {name.name}
              </p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}
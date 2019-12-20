import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([])
 useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getCharacter = () =>{
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch (error => {
        console.log('Sever Error', error);
      });
    // }
      // getCharacter

    }, []);



  return (
    <section className="character-list">
      {characters.map(character => (
        <Link to = {`${character.id}`}>
<CharacterInfo key = {character.id} character = {character}/>

        </Link>
      ))}
      
    </section>
  );
      }

function CharacterInfo ({ character }) {
  const {name, status, species, gender, image } = character;
  return (
    <Link to = {`${character.id}`}
    key= {character.id}>
     <h3> name:{name}</h3>
     <h4>  status:{status}</h4>
    <p>  species: {species}</p>
    <p>  gender: {gender}</p>
    <img src = {image}/>

</Link>
  );
}

export default CharacterList;


//   const handleSubmit = event=>{
//     event.preventDefault()
//     const filteredChars = chars.filter(ele => ele.name.toLowerCase().includes(search.toLowerCase()))
//     setChars(filteredChars)
//   }
  
//   useEffect(()=> {
//     Axios
//       .get("https://rickandmortyapi.com/api/character/")
//       .then(res=> {
//         console.log(res)
//         const charArray = res.data.results
//         setChars(charArray)
//       })
//       .catch(err=>console.log(err))
//       // return setNextPage("https://rickandmortyapi.com/api/character/")
//   }, [])
  
//   return (
//     <section className="character-list">
//       <SearchForm 
//         search={search} 
//         handleChange={handleChange} 
//         handleSubmit={handleSubmit}
//       />
//       <h2>Character List</h2>
//       {chars.map(person=> {
//         return (
//           <Link key={person.id} to={`/characters/${person.id}`}>
//             <p>{person.name}</p>
//           </Link>
//         )
//       })}
//       <Route path="/characters/:id" render={(props)=> {
//         return <CharacterCard props={props} chars={chars}/>
//       }}/>
//     </section>
//   );
// }
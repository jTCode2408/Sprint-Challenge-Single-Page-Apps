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


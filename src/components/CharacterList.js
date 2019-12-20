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
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data);
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
  const {props} = character;
  return (
    <Link to = {`${character.id}`}
    key= {character.id}>
      Name{props.name}
      Status{props.status}
      Species {props.species}
      Gender {props.gender}

</Link>
  );
}

export default CharacterList;
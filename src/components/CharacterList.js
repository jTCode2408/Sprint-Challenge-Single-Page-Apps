import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
 import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Toast, ToastBody} from "reactstrap";
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
       <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastBody>
          Character's List
          </ToastBody>
        </Toast>
      </div>
      {characters.map(character => (
        <Link to = {`${character.id}`}>
<CharacterInfo key = {character.id} character = {character}/>


        </Link>
      ))}
      
    </section>
  );
      }

function CharacterInfo ({ character }) {
  const {name, status, species, gender, image, origin} = character;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src= {image}/>
        <CardBody>
          <CardTitle>Name:{name}</CardTitle>
          <CardSubtitle>Dead or Alive?{status}</CardSubtitle>
          <CardSubtitle> Species: {species}</CardSubtitle>
          <CardSubtitle>  Gender: {gender}</CardSubtitle>
          <CardText>Home World: {origin.name}</CardText>
          <Button> <Link to = {`${character.name}`}
    key= {character.id}>Search!</Link></Button>
        </CardBody>
      </Card>
    </div>
   

  );
}

export default CharacterList;


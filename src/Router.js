import React, {useState, useEffect } from 'react'
import { Switch, Route, useParams, Link } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


const Router = (props) => {
    const [character, setCharacter] = useState ([]);

    const {id} = useParams();
    useEffect(() =>{
        axios 
        .get (`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            setCharacter(response.data.resuls);
            console.log(id);
            console.log(character.id);
        })
        .catch (error => {
            console.error(error);
        });
    }, [id, character])

return (

    <div className = "char-card">
<CharacterCard key = {character.id}/>
    </div>
);
}

export default Router;
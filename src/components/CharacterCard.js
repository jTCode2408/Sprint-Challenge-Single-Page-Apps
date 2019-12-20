import React from "react";
import {useRouteMatch, Link, Rotes, useParams} from "react-router-dom";

//get id/name of characters 
//set path for links?
//
const CharacterCard = props => {

const {id} = useParams();
console.log(id);
const {path, url} = useRouteMatch();


  return (
    <div>
{/* <Link to = {`${url}/movies/movie`}>
      Movies
    </Link>
    <Route path = {`${path}/movies/movie/:id`}>
    </Route> */}

    </div>
  );
}


export default CharacterCard;
import React from "react";
import {useRouteMatch, Link, Route, useParams} from "react-router-dom";

//get id/name of characters 
//set path for links?
//
const CharacterCard = props => {

const {id} = useParams();
console.log(id);
const {path, url} = useRouteMatch();


  return (
    <div>
<Link to = {`${url}/components/CharacterList`}>
      Characters
    </Link>
    <Route path = {`${path}/components/ChracterList/:id`}>
    </Route>

    </div>
  );
}


export default CharacterCard;

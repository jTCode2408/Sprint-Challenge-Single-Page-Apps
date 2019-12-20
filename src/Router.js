import React, {useState, useEffect } from 'react'
import { Switch, Route, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


const Router = () => {
  

 return(

<div>

<div>
<Link to = "/"> <h2>Home</h2></Link>
</div>
<div>
    <Link to = "/components/CharacterList"> <h2>CharacterList</h2></Link>

    <Switch>

    <Route  path = "/components/CharacterList">
        <CharacterList/>
    </Route>
    <Route exact path  = "/">
        <WelcomePage/>
    </Route>
    </Switch>
</div>

  </div>
 );
};

export default Router;
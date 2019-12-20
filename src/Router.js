import React, {useState, useEffect } from 'react'
import { Switch, Route, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


const Router = () => {
  

 return(

<div>

<h2>Home </h2>
<div>
<Link to = "/"> Home</Link>
</div>
<div>
    <Link to = "./components/CharacterList"> CharacterList</Link>
<Switch>
    <Route path = '/components/CharacterList'>
        <CharacterList/>
    </Route>
    <Route exact path  = '/'>
        <WelcomePage/>
    </Route>

    </Switch>
</div>

  </div>
 );
};

export default Router;
import React from "react";
import { BrowserRouter, Switch, Route } from'react-router-dom';
import Movie from './Movie';
import Home from './Home';
import Header from './Header';
import './style.css'


const Container = () => {
    return (
        <BrowserRouter>
    <>
        <div>
          <Header />
        </div>
       <Switch>
         <Route exact path="/" render={() => <Home/>}/>  
         <Route path="/Movies" render={() => <Movie/>}/>
       </Switch>
      </>
      </BrowserRouter>
    )
}

export default Container;
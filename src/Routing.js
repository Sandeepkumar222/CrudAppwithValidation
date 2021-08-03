import React from 'react';
import {BrowserRouter,Route, Redirect,Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Crud from './CrudAppFunc';
import AboutUser from './AboutUser';
import Header from './header';






const Routing = () => {
    return (
        <>


        <BrowserRouter>
        <div>
            <Header/>
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/About">
            <About />
        </Route>
       
        <Route path="/home">
            <Redirect to = "/"></Redirect>
        </Route>
        <Route path="/posts">
            <Crud/>
        </Route>
        <Route path="/aboutuser/:Id">
            <AboutUser/>
        </Route>
        <Route path="/aboutuser">
            <AboutUser/>
        </Route>
        <Route path="/aboutme">
            <About/>
        </Route>
        <Route path="*">
            <h1>404 Error</h1>
        </Route>
        </Switch>
        </div>
        </BrowserRouter>

        <div className="footer"></div>
        </>
    )
}
export default Routing
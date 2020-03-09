import React from 'react';
import LevelSelection from './components/levelSelection'
import Guess from "./components/guess";
import GameRule from "./components/gameRule"
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import NotFoundPage from './components/notFound'


function App () {


        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component = {LevelSelection} />
                        <Route exact path='/guessing' component={Guess} />
                        <Route exact path='/gameRule' component={GameRule} />
                        <Route exact path='/404' component = {NotFoundPage} />
                        <Redirect to="/404"/>
                    </Switch>
                </Router>
        </div>)

}

export default App;
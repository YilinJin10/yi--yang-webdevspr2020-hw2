import React from 'react';
import LevelSelection from './components/levelSelection'
import Guess from "./components/guess";


function App () {


        return (<div>
            <h1>{"Let's Play"}</h1>
            <LevelSelection/>
            <Guess/>
        </div>)

}

export default App;
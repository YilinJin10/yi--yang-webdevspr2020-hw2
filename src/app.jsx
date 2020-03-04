import React from 'react';
import LevelSelection from './conponents/levelSelection'
import Guess from "./conponents/guess";

function App () {


        return (<div>
            <h1>{"Let's Play"}</h1>
            <LevelSelection/>
            <h1></h1>
            <Guess/>
        </div>)

}

export default App;
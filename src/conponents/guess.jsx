
import React from 'react';
import { guessWord } from '../actions'
import { addToHistory } from '../actions'
import {connect} from "react-redux";
import History from "./history"
import ChanceLeft from "./chanceleft";
import {targetWords} from "../store/reducers";

class Guess extends React.Component {

    constructor() {
        super();

    }

    render() {
        let _input;

        return(
            <div>
                <span>Guess:</span>

                <input type="text"
                       ref={input=>_input=input}
                       onChange={() => this.props.guessWord(_input.value, this.props.chanceLeft, this.props.targetWord)}/>
                <History/>
                <ChanceLeft/>

            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        guessWord: (val, chanceLeft, targetWord) => {
            dispatch(guessWord(val, targetWord));
            dispatch(addToHistory(val, parseInt(chanceLeft)-1));
        }
    }
};

function mapStateToProps(state, props) {
    return{
        chanceLeft: state.chanceLeft,
        targetWord: state.targetWords
    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Guess)
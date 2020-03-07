
import React from 'react';
import { guessWord } from '../actions'
import { addToHistory } from '../actions'
import { restart } from '../actions'
import {connect} from "react-redux";
import History from "./history"
import ChanceLeft from "./chanceleft";
import CorrectPosition from "./correctPosition";
import { Link } from "react-router-dom";
import WordList from "./wordList";


class Guess extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return(
            <div>
                {this.props.restartValue || (this.props.chanceLeft === 0) ? '' :
                    <WordList/>
                }

                {/*<form onSubmit={this.props.guessWord(this.state.input, this.props.targetWord)}>*/}
                {this.props.restartValue || (this.props.chanceLeft === 0) ? '' :
                    <label>Guess:

                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                }
                {this.props.restartValue || (this.props.chanceLeft === 0) ? '' :
                    <button
                        onClick={() => this.props.guessWord(this.state.value, this.props.wordList['target'],
                            this.props.chanceLeft)}> confirm </button>
                }
                <Link to='/'>
                    <button onClick={() => this.props.restart()}> Restart </button>
                </Link>

                { this.props.restartValue || (this.props.chanceLeft === 0) ? '': <History/> }
                { this.props.restartValue || (this.props.chanceLeft === 0) ? '': <ChanceLeft/> }
                { this.props.restartValue || (this.props.chanceLeft === 0) ? '': <CorrectPosition/> }
                { this.props.restartValue ? <h1> You Win!!</h1> : '' }
                { (this.props.chanceLeft === 0) ? <h1> You Lose!!</h1> : ''}



            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        guessWord: (val, targetWord) => {
            dispatch(guessWord(val, targetWord));
            dispatch(addToHistory(val, targetWord));
        },
        restart: () => {
            dispatch(restart());
        }
    }
};

function mapStateToProps(state, props) {
    return{
        chanceLeft: state.chanceLeft,
        wordList: state.wordList,
        restartValue: state.restart
    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Guess)
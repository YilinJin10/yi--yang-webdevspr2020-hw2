
import React from 'react';
import { guessWord } from '../actions'
import { addToHistory } from '../actions'
import {connect} from "react-redux";
import History from "./history"
import ChanceLeft from "./chanceleft";

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
                {/*<form onSubmit={this.props.guessWord(this.state.input, this.props.targetWord)}>*/}
                    <label>Guess:

                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>

                       {/*// ref={input=>_input=input}*/}
                       {/*// onChange={() => this.props.guessWord(_input.value, this.props.chanceLeft, this.props.targetWord)}/>*/}
                    <button onClick={() => this.props.guessWord(this.state.value, this.props.targetWord)}> confirm </button>
                    {/*<input type="submit" value="Submit" />*/}
                {/*</form>*/}
                <History/>
                <ChanceLeft/>

            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        guessWord: (val, targetWord) => {
            dispatch(guessWord(val, targetWord));
            dispatch(addToHistory(val, targetWord));
        }
    }
};

function mapStateToProps(state, props) {
    return{
        chanceLeft: state.chanceLeft,
        targetWord: state.targetWords,
    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Guess)
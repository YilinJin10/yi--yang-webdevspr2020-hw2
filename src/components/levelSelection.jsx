
import React from 'react';
import { pickLevel } from '../actions'
import {connect} from "react-redux";
import WordList from "./wordList";

class LevelSelection extends React.Component {

    constructor() {
      super();
      this.state = {
          value : 'easy'
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {

        return(
            <div>
            {/*<span>Select Level</span>*/}

            {/*<input type="text"*/}
            {/*       ref={input=>_input=input}*/}
            {/*       onChange={() => this.props.selectLevel(_input.value)}/>*/}

                <label>Choose a level:

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>

                </label>
                <button onClick={() => this.props.selectLevel(this.state.value)}> confirm </button>
                <WordList/>
            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        selectLevel: (val) => {
            dispatch(pickLevel(val))
        }
    }

};

export default connect(
    null,
    mapDispatchToProps
)(LevelSelection)
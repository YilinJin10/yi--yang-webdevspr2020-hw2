
import React from 'react';
import { pickLevel } from '../actions'
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class LevelSelection extends React.Component {

    constructor() {
      super();
      this.state = {
          value : 'very_easy'
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
                        <option value="very_easy" selected>very_easy</option>
                        <option value="easy">easy</option>
                        <option value="average">average</option>
                        <option value="hard">hard</option>
                        <option value="very_hard">very_hard</option>
                    </select>

                </label>
                <Link to = '/guessing'>
                    <button onClick={() => this.props.selectLevel(this.state.value)}> confirm </button>
                </Link>

                <Link to = '/gameRule'>
                    <button> Game Rule </button>
                </Link>
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
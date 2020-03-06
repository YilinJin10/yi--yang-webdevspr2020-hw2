import React from 'react';
import {connect} from "react-redux";


class CorrectPosition extends React.Component {

    render() {

        return(
            <div>
                <h1> Correct Position: </h1>
                <h2> {this.props.correctPosition}</h2>

            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {

    }
};

function mapStateToProps(state, props) {
    return {
        correctPosition: state.correctPosition
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CorrectPosition)
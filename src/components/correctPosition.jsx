import React from 'react';
import {connect} from "react-redux";


class CorrectPosition extends React.Component {

    render() {

        return(
            <div>
                <h2> Correct Position: </h2>
                <h3> {this.props.correctPosition}</h3>

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
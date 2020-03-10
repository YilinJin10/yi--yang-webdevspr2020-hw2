import React from 'react';
import {connect} from "react-redux";


class History extends React.Component {

    render() {

        return(
            <div>
                <h2> Guessing History: </h2>
                <h3> {this.props.history.toString()}</h3>

            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {

    }
};

function mapStateToProps(state, props) {
    return {
        history: state.guessingHistory
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History)
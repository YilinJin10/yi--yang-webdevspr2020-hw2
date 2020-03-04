import React from 'react';
import {connect} from "react-redux";


class History extends React.Component {

    render() {

        return(
            <div>
                <h1> Guessing History: </h1>
                <h2> {this.props.history}</h2>

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
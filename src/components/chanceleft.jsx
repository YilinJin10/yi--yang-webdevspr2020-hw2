import React from 'react';
import {connect} from "react-redux";


class ChanceLeft extends React.Component {

    render() {

        return(
            <div>
                <h1> Remaining Chance: </h1>
                <h2> {this.props.chances}</h2>

            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {

    }
};

function mapStateToProps(state, props) {
    return {
        chances: state.chanceLeft
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChanceLeft)
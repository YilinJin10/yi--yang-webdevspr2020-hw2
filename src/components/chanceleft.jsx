import React from 'react';
import {connect} from "react-redux";


class ChanceLeft extends React.Component {

    render() {

        return(
            <div>
                <h2> Remaining Chance: </h2>
                <h3> {this.props.chances}</h3>

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
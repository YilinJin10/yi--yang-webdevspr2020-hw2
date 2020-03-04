import React from 'react';
import {connect} from "react-redux";


class WordList extends React.Component {

    render() {
        const wordList = this.props.wordList;
        return(
            <div>
                <h1> Word List: </h1>

                <ul>
                    {wordList.map(word =>(
                        <li key={word}>{word}</li>))}
                </ul>
            </div>)
    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {

    }
};

function mapStateToProps(state, props) {
    return {
        wordList: state.wordList
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordList)
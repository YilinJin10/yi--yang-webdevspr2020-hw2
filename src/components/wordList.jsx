import React from 'react';
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";


class WordList extends React.Component {

    render() {
        const wordList = this.props.wordList['list'];
        return(
            <div id = 'wordList'>
                <Container>
                    <Row>
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>
                            <h1>Word List</h1>
                        </Col>
                        <Col lg={3} sm={0}></Col>
                    </Row>

                    <Row>
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>
                            <ul type="none">
                                {wordList.map(word =>(
                                    <li key={word}>{word}</li>))}
                            </ul>
                        </Col>
                        <Col lg={3} sm={0}></Col>
                    </Row>
                </Container>
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
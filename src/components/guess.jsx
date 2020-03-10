
import React from 'react';
import { guessWord } from '../actions'
import { addToHistory } from '../actions'
import { restart } from '../actions'
import {connect} from "react-redux";
import History from "./history"
import ChanceLeft from "./chanceleft";
import CorrectPosition from "./correctPosition";
import { Link } from "react-router-dom";
import WordList from "./wordList";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import '../css/style.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



class Guess extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    };




    render() {

        function checkRestart(restartValue, chanceLeft) {
            if (restartValue === true || chanceLeft === 0) {
                return true;
            } else {
                return false
            }
        }


        return(
            <div id = 'guess'>

                <Container>
                    {checkRestart(this.props.restartValue, this.props.chanceLeft) ? '' :
                        <WordList/>
                    }

                    <Row>
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>
                            { checkRestart(this.props.restartValue, this.props.chanceLeft) ? '':
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Type Your Guess:</Form.Label>
                                        <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>
                                </Form>
                            }
                        </Col>
                        <Col lg={3} sm={0}></Col>
                    </Row>
                    { this.props.restartValue ?
                        <img className="img-responsive" src={'https://thumbs.dreamstime.com/b/vector-stock-comic-explosion-bang-boom-you-win-text-comic-cartoon-bang-exsplosion-you-win-text-126376540.jpg'}/>
                        : '' }
                    { (this.props.chanceLeft === 0) ?
                        // <img className="img-responsive" src={'https://lh3.googleusercontent.com/proxy/T6zVcSJ8Z02e2ARDZBEfHqx5QFYEIDxaPvUGm4KA-IGlCYflXEufVEXXvJjXGAPIjjjAo6vY_vBf5w-Vm8pwRqVOHZJVwUn2'}/>
                        <img className="img-responsive" src={'https://www.tynker.com/projects/images/5c51d938cebfbd4e5e79d88f/to-lose-a-game-png-s2e16-you-lose-png-1920---to-lose-a-game-png-s2e16-you-lose-png-1920.png'}/>
                        : ''}
                    <br/>
                    <Row>

                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>

                            { checkRestart(this.props.restartValue, this.props.chanceLeft) ? '':
                                <Button variant="primary" size="lg"
                                        onClick={() => this.props.guessWord(this.state.value, this.props.wordList['target'], this.props.chanceLeft)}>
                                    Confirm
                                </Button>
                            }



                            <Link to='/'>
                                <Button variant="dark" size="lg" onClick={() => this.props.restart()}> Restart </Button>
                            </Link>
                        </Col>
                        <Col lg={3} sm={0}></Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col lg={4} sm={12}>
                            { checkRestart(this.props.restartValue, this.props.chanceLeft) ? '': <ChanceLeft/> }
                        </Col>
                        <Col lg={4} sm={12}>
                            { checkRestart(this.props.restartValue, this.props.chanceLeft) ? '': <History/> }
                        </Col>
                        <Col lg={4} sm={12}>
                            { checkRestart(this.props.restartValue, this.props.chanceLeft) ? '': <CorrectPosition/> }
                        </Col>
                    </Row>
                </Container>



            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        guessWord: (val, targetWord) => {
            dispatch(guessWord(val, targetWord));
            dispatch(addToHistory(val, targetWord));
        },
        restart: () => {
            dispatch(restart());
        }
    }
};

function mapStateToProps(state, props) {
    return{
        chanceLeft: state.chanceLeft,
        wordList: state.wordList,
        restartValue: state.restart
    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Guess)
import React from 'react';


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import '../css/style.css';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const GameRule = () => {

    return (
        <div id = 'gameRule'>
                <Container>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <h1>The rules for this game are as follows:</h1>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <ul>
                                <li>
                                    The goal of the game is to require the player to correctly guess a password from a list of same length words.
                                </li>
                                <li>
                                    The player has only 4 guesses and on each incorrect guess the computer will indicate how many letter positions are correct.
                                </li>
                            </ul>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>

                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <p>
                                For example, if the password is DANCE and the player guesses DENSE, the game will indicate that 4 out of 5 positions are correct (D_NCE). Likewise, if the password is HOPEFUL and the player guesses DANCING, the game will report 0/7 because while some of the letters match, they're in the wrong position.  The view should maintain both a history of the user’s input as well as a history of how well they did in previous sections.
                            </p>
                            <br/>
                            <p>
                                Ask the player for a difficulty (very easy, easy, average, hard, very hard), then present the player with 5 to 15 words of the same length. The length can be 4 to 15 letters. More words and letters make for a harder puzzle. The player then has 4 guesses, and on each incorrect guess indicate the number of correct positions.
                            </p>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <Link to = ''>
                                <Button variant="primary" size="lg">Start Playing</Button>
                            </Link>
                            <Button variant="link" size="lg" href={'https://en.wikipedia.org/wiki/Mastermind_(board_game)'}>Learn more</Button>

                        </Col>
                        <Col sm={1}></Col>
                    </Row>

                        {/*<ButtonToolbar id = 'buttonToolBar'>*/}
                        {/*    <Button variant="primary">Back To Game</Button>*/}
                        {/*    <Button variant="info" href={'https://en.wikipedia.org/wiki/Mastermind_(board_game)'}>Learn more</Button>*/}
                        {/*</ButtonToolbar>*/}

                </Container>

        </div>

    )
}

export default GameRule;
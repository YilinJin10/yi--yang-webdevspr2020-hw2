
import React from 'react';
import { pickLevel } from '../actions'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../css/style.css';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class LevelSelection extends React.Component {

    constructor() {
      super();
      this.state = {
          value : 'very_easy'
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {

        return(
            <div id = 'levelSelection'>
                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <img className="img-responsive" src={'https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/81/66/ec/8166ec48-3566-ea7e-f07e-ef54e4777a81/source/512x512bb.jpg'}/>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Choose a level: </Form.Label>
                                    <Form.Control size="lg" as="select" value={this.state.value} onChange={this.handleChange}>
                                        <option value="very_easy">very_easy</option>
                                        <option value="easy">easy</option>
                                        <option value="average">average</option>
                                        <option value="hard">hard</option>
                                        <option value="very_hard">very_hard</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Link to = '/guessing'>
                                <Button Button variant="primary" size="lg" onClick={() => this.props.selectLevel(this.state.value)}> Confirm </Button>
                            </Link>

                            <Link to = '/gameRule'>
                                <Button variant="dark" size="lg"> Game Rule </Button>
                            </Link>

                        </Col>
                        <Col sm={3}></Col>
                    </Row>

                </Container>
            </div>)

    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        selectLevel: (val) => {
            dispatch(pickLevel(val))
        }
    }

};

export default connect(
    null,
    mapDispatchToProps
)(LevelSelection)
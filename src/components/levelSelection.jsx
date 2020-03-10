
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
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={0}>
                            <img className="img-responsive" src={'https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/81/66/ec/8166ec48-3566-ea7e-f07e-ef54e4777a81/source/512x512bb.jpg'}
                            width="400px"/>
                        </Col>
                        <Col lg={3} sm={0}></Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>
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
                        <Col lg={3} sm={0}></Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={0}></Col>
                        <Col lg={6} sm={12}>
                            <Link to = '/guessing'>
                                <Button Button variant="primary" size="lg" onClick={() => this.props.selectLevel(this.state.value)}> Confirm </Button>
                            </Link>

                            <Link to = '/gameRule'>
                                <Button variant="dark" size="lg"> Game Rule </Button>
                            </Link>

                        </Col>
                        <Col lg={3} sm={0}></Col>
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
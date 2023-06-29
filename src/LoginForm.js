
import React, {Component} from 'react'

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class LoginForm extends Component {
  render() {
    return (
      <Container id="loginForm">
        <h3 className="fw-bolder">Log In</h3>
        <Form>
          <Form.Group className="m-2 fw-bold" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
          <Form.Group className="m-2 fw-bold" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
          </Form.Group>
          <Button className="fw-bolder mt-2" id="submitButton" variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}


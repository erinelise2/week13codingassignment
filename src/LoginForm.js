
import React, {Component} from 'react'

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


let singleUser = {
  name: 'Erin',
  time: <DateTime />,
}

export default class LoginForm extends Component {
  render() {
    return (
      <Container id="login">
        <h3>Log In</h3>
        <Form>
          <Form.Group className="m-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
          <Form.Group className="m-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

{/* <Nav></Nav>
<div className="login-text">
  <h3 className="font-style">User Name</h3>
  <h1 className="font-style">Log In</h1>
</div> */}

{/* <div className="welcomeSection">
<h1>Welcome, {singleUser.name}</h1>
<DateTime></DateTime>
</div> */}
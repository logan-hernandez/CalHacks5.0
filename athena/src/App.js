import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import { Button, Container, Row } from 'reactstrap';
import Result from './result'
import NavBar from './NavBar'
const socket = io.connect("http://localhost:5000");

class App extends Component {
  constructor(props) {
    super(props);
    this.handleTeach = this.handleTeach.bind(this);
    this.handleLearn = this.handleLearn.bind(this);
    this.state = { teach: false, learn: false };
  }

  componentDidMount() {
    socket.on("event", k => {
      console.log(k);
    });
  }

  handleTeach() {
    this.setState({ teach: true, learn: false});
  }

  handleLearn() {
    this.setState({ teach: true, learn: true });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
        <div align="center">
          <h1 textAlign="center" color="#6A98FF">Athena</h1>
        </div>
        <div align="center">
          <Row>
            <Button outline color="primary" onClick={this.handleTeach}>Teach</Button>
            <samp />

            <Button outline color="primary" onClick={this.handleLearn}>Learn</Button>
          </Row>
        </div>
          <Result status={this.state}/>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import { Button } from 'reactstrap';
import Result from './result'

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
    this.setState({ teach: true });
  }

  handleLearn() {
    this.setState({ learn: true }); 
  }

  render() {
    return (
      <div className="App">
        <h1>Athena</h1>
        <Button outline color="primary" onClick={this.handleTeach}>Teach</Button>
        <Button outline color="primary" onClick={this.handleLearn}>Learn</Button>
        <Result status={this.state} />
      </div>
    );
  }
}

export default App;
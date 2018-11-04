import React, { Component } from 'react';
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

export default class Choose extends Component {
	componentWillMount() {
    	socket.on("tutors", (res) => {this.setState(res)} );
  	}

	render() {
		return (
			<div>Choose</div>
		);
	}
}
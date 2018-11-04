import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

export default class LearnForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.handleClassChange = this.handleClassChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = { subject:"none", course:"none", class:"none" };
	}

	handleClick() {
		socket.emit("learn", this.state);
		console.log(this.state);
	}

	handleClassChange(event) {
		this.setState({class: event.target.value});
	}

	handleCourseChange(event) {
		this.setState({course: event.target.value});
	}

	handleSubjectChange(event) {
		this.setState({subject: event.target.value});
	}

	render() {
		return(
			<div>
				<Form>
					<FormGroup>
						<Label for="subjectField">Subject</Label>
						<Input type="select" name="subject" id="subjectField" onChange={this.handleSubjectChange}>
							<option>Search by Subject</option>
							<option>Computer Science</option>
							<option>Electrical Engineering</option>
							<option>Philosophy</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="courseField">Course Name</Label>
						<Input type="text" name="course" id="courseField" placeholder="Search by Name" onChange={this.handleCourseChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="classField">Class Number</Label>
						<Input type="text" name="class" id="classField" placeholder="Search by Number" onChange={this.handleClassChange}/>						
					</FormGroup>
				</Form>
				<Button outline color="primary" onClick={this.handleClick}>Search</Button>
			</div>
		);
	}
}
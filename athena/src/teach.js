import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

export default class TeachForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.handleClassChange = this.handleClassChange.bind(this);
		this.handleRateChange = this.handleRateChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = { subject:"none", course:"none", class:"none", rate: 10 };
	}

	handleClick() {
		socket.emit("teach", this.state);
		this.props.completed();
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

	handleRateChange(event) {
		this.setState({rate: event.target.value});
	}

	render() {
		return(
			<div>
				<Form>
					<FormGroup>
						<Label for="subjectField">Subject</Label>
						<Input type="select" name="subject" id="subjectField" onChange={this.handleSubjectChange}>
							<option>Choose Subject</option>
							<option>Computer Science</option>
							<option>Electrical Engineering</option>
							<option>Philosophy</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="courseField">Course Name</Label>
						<Input type="text" name="course" id="courseField" placeholder="Choose Course" onChange={this.handleCourseChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="classField">Class Number</Label>
						<Input type="text" name="class" id="classField" placeholder="Choose Number" onChange={this.handleClassChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="ratePerHour">Hourly Rate ($)</Label>
						<Input type="text" name="rate" id="ratePerHour" placeholder="10" onChange={this.handleRateChange}/>
					</FormGroup>
				</Form>
				<Button outline color="primary" onClick={this.handleClick}>Post Listing</Button>
			</div>
		);
	}
}

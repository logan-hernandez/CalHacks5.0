import React, { Component } from 'react';

export default class Waiting extends Component {
	render() {
		if (this.props.status.learn) {
			if(this.state.complete) {
				if(this.state.selected) {
					return(
						<Choose />
					);
				}
				else {
					return(
						<Waiting />
					);
				}
			}
			else {
				return(
					<LearnForm />
				);
			}
		}
		else if (this.props.status.teach) {
			if(this.state.complete) {
				return(
					<Waiting />
				);
			}
			else {
				return(
					<TeachForm />
				);
			}
		}
		else
			return(<div></div>);
	}
}
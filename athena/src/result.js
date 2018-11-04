import React, { Component } from 'react';
import LearnForm from './learn';
import TeachForm from './teach';

export default class Result extends Component {
	render() {
		if (this.props.status.learn)
			return(
				<LearnForm />
			);
		else if (this.props.status.teach)
			return(
				<TeachForm />
			);
		else
			return(<div></div>);
	}
}
import React, { Component } from 'react';
import LearnForm from './learn';
import TeachForm from './teach';
import Waiting from './waiting';
import Choose from './choose';

export default class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {complete: false, selected: false};
	}

	render() {
		if (this.props.status.learn) {
			if(this.state.complete) {
				if(this.state.selected) {
					return(
						<Waiting />
					);
				}
				else {
					return(
						<Choose selected={ ()=>{ this.setState({selected: true}) } }/>
					);
				}
			}
			else {
				return(
					<LearnForm completed={ ()=>{ this.setState({complete: true}) } }/>
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
					<TeachForm completed={ ()=>{ this.setState({complete: true}) } }/>
				);
			}
		}
		else
			return(<div></div>);
	}
}
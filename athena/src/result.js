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

// import React, { Component } from 'react';
// import LearnForm from './learn';
// import TeachForm from './teach';
// import Waiting from './waiting';
// import Choose from './choose';

// export default class Result extends Component {
// 	render() {
// 		if (this.props.status.learn) {
// 			if(this.state.complete) {
// 				if(this.state.selected) {
// 					return(
// 						<Choose />
// 					);
// 				}
// 				else {
// 					return(
// 						<Waiting />
// 					);
// 				}
// 			}
// 			else {
// 				return(
// 					<LearnForm />
// 				);
// 			}
// 		}
// 		else if (this.props.status.teach) {
// 			if(this.state.complete) {
// 				return(
// 					<Waiting />
// 				);
// 			}
// 			else {
// 				return(
// 					<TeachForm />
// 				);
// 			}
// 		}
// 		else
// 			return(<div></div>);
// 	}
// }
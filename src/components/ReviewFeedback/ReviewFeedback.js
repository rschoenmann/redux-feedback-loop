import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

class ReviewFeedback extends Component {

	state = {
		complete: false
	}

	//!this.props.feedback.comments || !this.props.feedback.feeling || !this.props.feedback.understanding || !this.props.feedback.support

	checkIfComplete = () => {
		if (!this.props.feedback.feeling) {
			this.setState({
				complete: false
			})
		}
		else if (this.props.feedback.feeling){
			this.setState({
				complete: true
			})

		}
		this.submitFeedback();
	}

	submitFeedback = () => {
		console.log('submitbutton handleClick');
		console.log('this state:', this.state);
	}

	render(){
		return(
			<div>
				<h2>Review Your Feedback</h2>
					<ul>
						<li>I'm feeling: {this.props.feedback.feeling}</li>
						<li>I'm understanding: {this.props.feedback.understanding}</li>
						<li>I feel supported: {this.props.feedback.supported}</li>
						<li>Comments: {this.props.feedback.comments}</li>
					</ul>	
				<Button variant="contained" color="primary" onClick={this.checkIfComplete}>Submit Feedback</Button>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		//feedbackReducer is now this.props.feedback
		feedback: reduxState.feedbackReducer
	}
}

export default connect(mapReduxStateToProps)(ReviewFeedback);
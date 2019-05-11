import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

class ReviewFeedback extends Component {
	render(){
		return(
			<div>
				<h2>Review Your Feedback</h2>
				<p>I'm feeling: {this.props.feedback.feelings}</p>
				<p>I'm understanding: {this.props.feedback.understanding}</p>
				<p>I feel supported: {this.props.feedback.supported}</p>
				<p>Comments: {this.props.feedback.comments}</p>
				<Button variant="contained" color="primary">Submit Feedback</Button>
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
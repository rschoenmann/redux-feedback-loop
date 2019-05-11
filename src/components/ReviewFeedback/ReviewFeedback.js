import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

class ReviewFeedback extends Component {
	render(){
		return(
			<div>
				<h2>Review Your Feedback</h2>
				<p>Feelings: {this.props.feedback.feelings}</p>
				<p>Understanding:</p>
				<p>Support:</p>
				<p>Comments:</p>
				<Button variant="contained" color="primary">Submit Feedback</Button>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		feedback: reduxState.feedbackReducer
	}
}

export default connect(mapReduxStateToProps)(ReviewFeedback);
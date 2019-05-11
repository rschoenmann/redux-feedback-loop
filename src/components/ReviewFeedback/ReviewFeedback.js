import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Tooltip} from '@material-ui/core';
import {withRouter} from 'react-router';

class ReviewFeedback extends Component {

	state = {
		complete: false
	}

	submitFeedback = () => {
		console.log('submitbutton handleClick');
		console.log('this state:', this.state);
	};//end submitFeedback

	render(){
		return (
			<div>
				<h2>Review Your Feedback</h2>
				<ul>
					<li>I'm feeling: {this.props.feedback.feeling}</li>
					<li>I'm understanding: {this.props.feedback.understanding}</li>
					<li>I feel supported: {this.props.feedback.supported}</li>
					<li>Comments: {this.props.feedback.comments}</li>
				</ul>
				{/* <Tooltip title="Please make sure all sections are complete before submitting!" placement="bottom"> */}
					<Button variant="contained" color="primary"
					onClick={this.submitFeedback} disabled={!this.props.complete}>Submit Feedback</Button>
				{/* </Tooltip> */}
				
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

// export default withRouter(connect(mapRedux)(Review))
export default withRouter(connect(mapReduxStateToProps)(ReviewFeedback));

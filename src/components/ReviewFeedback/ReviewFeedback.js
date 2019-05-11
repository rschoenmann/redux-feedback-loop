import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Tooltip} from '@material-ui/core';
import {withRouter} from 'react-router';
import axios from 'axios';

class ReviewFeedback extends Component {

	submitFeedback = () => {
		//on submitButton, POST feedback to database and send user to success page
		console.log('submitbutton handleClick');
		console.log('this.props.feedback:', this.props.feedback);
		axios.post('/feedback', this.props.feedback)
		.then(response => {
			console.log('back from POST with response:', response)
			this.props.history.push('/success');
		}).catch(error => {
			console.log('error in POST:', error);
		})//end POST
	};//end submitFeedback

	render(){
		//conditionally render submitButton based on all feedback data being present in redux or not
		let submitButton;
		//since I know my if/else statements in the components make users enter a number from 1-5 and
		//initial state in index.js is set to 0, should register as true as long as they're not = 0
		if (this.props.feedback.feeling !== 0
			&& this.props.feedback.understanding !== 0
			&& this.props.feedback.support !==0
			&& this.props.feedback.comments !== ''){
				console.log('reviewfeedback button can submit');
				submitButton = <Button variant="contained" color="primary"
								onClick={this.submitFeedback}>Submit Feedback</Button>
			} else {
			console.log('reviewfeedback button cannot submit');
				submitButton = <Tooltip title="Please make sure all sections are complete before submitting!" placement="bottom">
							<span><Button variant="contained" color="primary"
							disabled >Incomplete</Button></span>
							</Tooltip>
			}//end if/else statement


		return (
			<div>
				<h2>Review Your Feedback</h2>
				<ul>
					<li>I'm feeling: {this.props.feedback.feeling}</li>
					<li>I'm understanding: {this.props.feedback.understanding}</li>
					<li>I feel supported: {this.props.feedback.supported}</li>
					<li>Comments: {this.props.feedback.comments}</li>
				</ul>
				{submitButton}
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

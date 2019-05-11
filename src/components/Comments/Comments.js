import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {

	state = {
		isFilled: false
	}

	handleChange = (event) => {
		//no real validation on comments handleChange, since it's an open text input and not a specific number requirement
		//will just make sure something is entered onClick of 'submit feedback' button
		this.props.dispatch({ type: 'ADD_COMMENTS', payload: event.target.value, name: 'comments' });
		this.checkIfComplete();
	};//end handleChange

	checkIfComplete = () => {
		//only set isFilled to true if all sections of feedback contain data
		if (!this.props.feedback.comments || !this.props.feedback.feeling || !this.props.feedback.understanding || !this.props.feedback.supported) {
			this.setState({
				isFilled: false
			})
		}
		else {
			this.setState({
				isFilled: true
			})

		}
		console.log('checkIfComplete', this.state.isFilled)
	};

	// checkIfComplete = () => {
	// 	//only set complete state to true if all sections of the feedback have data
	// 	if (!this.props.reduxState.feedbackReducer.feeling || !this.props.reduxState.feedbackReducer.comments || !this.props.reduxState.feedbackReducer.understanding || !this.props.reduxState.feedbackReducer.support) {
	// 		this.setState({
	// 			complete: false
	// 		})
	// 		console.log('checkcomplete false')
	// 	}
	// 	else if (this.props.reduxState.feedbackReducer.feeling && this.props.reduxState.feedbackReducer.comments && this.props.reduxState.feedbackReducer.understanding && this.props.reduxState.feedbackReducer.support) {
	// 		this.setState({
	// 			complete: true
	// 		})

	// 	}
	// 	console.log('checkIfComplete', this.state.complete)
	// };//end checkIfComplete

	handleNext = () => {
		console.log('handleNext');
		this.props.history.push('/')
	};//end handleNext

	render() {
		return (
			<div>
				<h2>Any comments you want to leave?</h2>
				<TextField
					onChange={this.handleChange}
					type="text"
					id="outlined-multiline-static"
					label="Comments"
					multiline rows="4"
					margin="normal"
					variant="outlined"/>
				<br></br>
				<Button
					onClick={this.handleNext}
					variant="outlined"
					color="primary">Next</Button>
				<ReviewFeedback isFilled={this.state.isFilled}/>
			</div>
			
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		feedback: reduxState.feedbackReducer
	}
}

export default connect(mapReduxStateToProps)(Comments);
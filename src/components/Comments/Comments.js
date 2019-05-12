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
		//will validate that something was entered onClick of 'submit feedback' button though
		this.props.dispatch({ type: 'ADD_COMMENTS', payload: event.target.value, name: 'comments' });
	};//end handleChange

	handleNext = () => {
		console.log('handleNext');
		//allow user to cycle back through feedback sections again if they hit next button
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
					color="primary">Back to First Section</Button>
				<ReviewFeedback />
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
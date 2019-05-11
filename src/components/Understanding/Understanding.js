import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

	handleChange = (event) => {
		if (event.target.value >= 0 && event.target.value <= 5) {
			// if a 0 above is entered, send understanding data to feedbackReducer
			this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: event.target.value, name: 'understanding'});
		} else {
			console.log('under 0');
			alert('Please enter a number between 0 and 5!')
			event.target.value = null;
		}
	};//end handleChange

	handleNext = () => {
		console.log('handleNext');
		this.props.history.push('/supported')
	};//end handleNext

	render() {
		return (
			<div>
				<h2>How well are you understanding the concepts?</h2>
				<TextField
					onChange={this.handleChange}
					type="number"
					id="outlined-number"
					label="Please enter a number 1-5"
					InputLabelProps={{
						shrink: true,
					}}
					margin="normal"
					variant="outlined"/>
				<br></br>
				<Button
					onClick={this.handleNext}
					variant="outlined"
					color="primary">Next</Button>
				<ReviewFeedback />
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapReduxStateToProps)(Understanding);
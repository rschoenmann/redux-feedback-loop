import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Feeling extends Component {

	handleChange = (event) => {
		console.log('event.target.value', event.target.value);
		if(event.target.value >= 1 && event.target.value <= 5){
			// if 1-5 is entered, send feelings data to feedbackReducer
			this.props.dispatch({ type: 'ADD_FEELING', payload: event.target.value, name: 'feeling' });
		} else {
			console.log('under 1');
			//otherwise alert user that they need to submit a number between 1 and 5 and clear the input
			alert('Please enter a number between 1 and 5!')
			event.target.value = null;
		}
	};//end handleRatingChange

	handleNext = () => {
		console.log('handleNext');
		this.props.history.push('/understanding')
	};//end handleNext

	render(){
		return(
			<div>
				<h2>How are you feeling today?</h2>
					<form>
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
							// 'submit feedback' button should be conditionally disabled, not next buttons. disabled={!this.state.value}
							variant="outlined" 
							color="primary">Next Section</Button>
					</form>
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

export default connect(mapReduxStateToProps)(Feeling);
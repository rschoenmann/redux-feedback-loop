import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from '@material-ui/core';

class Feelings extends Component {

	// state = {
	// 	value: ''
	// }

	handleChange = (event) => {
		// // next button is disabled unless there is something in the input field
		// this.setState({
		// 	value: event.target.value
		// })
		console.log('event.target.value', event.target.value);
		// send feelings data to feedbackReducer
		this.props.dispatch({ type: 'ADD_FEELINGS', payload: event.target.value, name: 'feelings' });
	}//end handleRatingChange

	handleNext = (event) => {
		console.log('handleNext');

	}//end handleNext
		


	render(){
		return(
			<div>
				<h2>How are you feeling today?</h2>
				<TextField
					onChange={this.handleChange}
					type="number"
					id="outlined-number"
					label="Please enter a number 1-5"
					InputLabelProps={{
						shrink: true,
					}}
					margin="normal"
					variant="outlined"
				/>
				<br></br>
				<Button 
					onClick={this.handleNext}
					// 'submit feedback' button should be conditionally disabled, not next buttons. disabled={!this.state.value}
					variant="outlined" 
					color="primary">Next</Button>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapReduxStateToProps)(Feelings);
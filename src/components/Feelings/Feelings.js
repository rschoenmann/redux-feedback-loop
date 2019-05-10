import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from '@material-ui/core';

class Feelings extends Component {

	state = {
		value: ''
	}

	handleRatingChange = (event) => {
		// next button is disabled unless there is something in the input field
		this.setState({
			value: event.target.value
		})
		console.log('event.target.value', event.target.value);
	}//end handleRatingChange

	handleNext = (event) => {
		//when next button is clicked, send the feelings data to the feedbackReducer
		this.props.dispatch({type: 'ADD_FEELINGS', payload: event.target.value, name: 'feelings'});
	}//end handleNext
		


	render(){
		return(
			<div>
				<h2>How are you feeling today?</h2>
				<TextField
					onChange={this.handleRatingChange}
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
					disabled={!this.state.value}
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

class Comments extends Component {

	state = {
		value: ''
	}

	handleRatingChange = (event) => {
		// next button is disabled unless there is something in the input field
		this.setState({
			value: event.target.value
		})
		//console.log('event.target.value', event.target.value);
	}



	render() {
		return (
			<div>
				<h2>Any comments you want to leave?</h2>
				<TextField
					onChange={this.handleRatingChange}
					type="text"
					id="outlined-multiline-static"
					label="Comments"
					multiline rows="4"
					margin="normal"
					variant="outlined"
				/>
				<br></br>
				<Button
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

export default connect(mapReduxStateToProps)(Comments);
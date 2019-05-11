import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

class Understanding extends Component {

	handleChange = (event) => {
		this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: event.target.value, name: 'understanding' });
	}//end handleChange



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
					variant="outlined"
				/>
				<br></br>
				<Button
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

export default connect(mapReduxStateToProps)(Understanding);
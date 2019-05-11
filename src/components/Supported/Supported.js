import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

class Supported extends Component {

	handleChange = (event) => {
		this.props.dispatch({ type: 'ADD_SUPPORTED', payload: event.target.value, name: 'supported' });
	}//end handleChange



	render() {
		return (
			<div>
				<h2>How well are you being supported?</h2>
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

export default connect(mapReduxStateToProps)(Supported);
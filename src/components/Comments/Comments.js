import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

class Comments extends Component {

	handleChange = (event) => {
		this.props.dispatch({ type: 'ADD_COMMENTS', payload: event.target.value, name: 'comments' });
	}//end handleChange



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

export default connect(mapReduxStateToProps)(Comments);
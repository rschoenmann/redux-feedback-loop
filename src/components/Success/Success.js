import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button} from '@material-ui/core';

class Success extends Component{

	handleStartOver = () => {
		//allows user to start over and submit another feedback
		console.log('handleStartOver');
		this.props.dispatch({ type: 'START_OVER'});
		this.props.history.push('/');
	};//end handleNext

	render(){
		return(
			<div>
				<h2>Thank you for your feedback!</h2>
				<Button
					onClick={this.handleStartOver}
					variant="outlined"
					color="primary">Leave Another Feedback</Button>
			</div> 
		)
	}
}

export default connect()(Success);
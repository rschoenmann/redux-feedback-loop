import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feelings extends Component {
	render(){
		return(
			<p>Feelings!</p>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapReduxStateToProps)(Feelings);
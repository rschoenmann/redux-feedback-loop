import React, { Component } from 'react';
import { connect } from 'react-redux';
import {lighten, Button, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Checkbox, IconButton, DeleteIcon, Tooltip, FilterListIcon } from '@material-ui/core';
import axios from 'axios';
import AdminData from '../AdminData/AdminData';

class Admin extends Component {

	componentDidMount(){
		console.log('componentDidMount');
		this.getFeedback();
	};//end componentDidMount

	getFeedback = () => {
		axios.get('/feedback').then(response => {
			console.log('response.data:', response.data);
			this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data})
		}).catch(error => {
			console.log('error in GET:', error);
		})
	};//end getFeedback

	render(){
		// make sure we're getting the data we're expecting: console.log('this.props.reduxState.getFeedbackReducer:', this.props.reduxState.getFeedbackReducer)
		return(
			<div>
				<h2>Admin Page</h2>
				<h3>I hope you know what you're doing....</h3>
				<p>Admin stuff goes here!</p>
					<div>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Date Submitted</TableCell>
									<TableCell>Feeling</TableCell>
									<TableCell>Understanding</TableCell>
									<TableCell>Supported</TableCell>
									<TableCell>Comments</TableCell>
									<TableCell>Delete</TableCell>
									<TableCell>Flag?</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.props.entry.map((anEntry) => {
									return (
										<AdminData key={anEntry.id} anEntry={anEntry} />
									)
								})}
							</TableBody>
						</Table>
					</div>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		//set reduxState.getFeedbackReducer to entry so we don't have to type reduxState.getFeedbackReducer everytime....
		entry: reduxState.getFeedbackReducer
	}
}

export default connect(mapReduxStateToProps)(Admin);
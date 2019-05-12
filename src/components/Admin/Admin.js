import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WithStyles, lighten, Button, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Checkbox, IconButton, DeleteIcon, Tooltip, FilterListIcon } from '@material-ui/core';
import axios from 'axios';

class Admin extends Component {

	state = {
		allFeedback: [],
	}

	componentDidMount(){
		console.log('componentDidMount');
		this.getFeedback();
	};//end componentDidMount

	getFeedback = () => {
		axios.get('/feedback').then(response => {
			console.log('response.data:', response.data);
			this.setState({
				allFeedback: response.data
			})
		}).catch(error => {
			console.log('error in GET:', error);
		})
	};//end getFeedback

	render(){
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

							</TableBody>
						</Table>
					</div>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapReduxStateToProps)(Admin);
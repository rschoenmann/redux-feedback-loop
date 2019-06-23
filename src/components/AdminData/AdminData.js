import React, { Component } from 'react';
import { connect } from 'react-redux';
import {lighten, Button, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Checkbox, IconButton, DeleteIcon, Tooltip, FilterListIcon } from '@material-ui/core';

class AdminData extends Component {
	render(){
		return(
			<TableRow>
				<TableCell>{this.props.anEntry.date}</TableCell>
				<TableCell>{this.props.anEntry.feeling}</TableCell>
				<TableCell>{this.props.anEntry.understanding}</TableCell>
				<TableCell>{this.props.anEntry.support}</TableCell>
				<TableCell>{this.props.anEntry.comments}</TableCell>
				<TableCell>DELETE</TableCell>
				<TableCell>{String(this.props.anEntry.flagged)}</TableCell>
			</TableRow>
		)
	}
}

const mapReduxStateToProps = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapReduxStateToProps)(AdminData);
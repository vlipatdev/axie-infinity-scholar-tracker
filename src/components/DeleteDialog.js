// import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog(props) {
	const { name, open, onClose, onDelete } = props;

	return (
		<div>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Confirm deletion</DialogTitle>
				<DialogContent>
					<DialogContentText>Are you sure you want to delete {name}?</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button variant="contained" onClick={onDelete}>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

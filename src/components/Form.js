import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Snackbar from './SnackBar';

function Form(props) {
	const { localData, onUpdate } = props;

	const [profile, setProfile] = useState({
		name: '',
		ronin_address: '',
		manager_share: '',
	});

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	function handleChange(event) {
		const { name, value } = event.target;

		setProfile((prevProfile) => {
			return {
				...prevProfile,
				[name]: value,
			};
		});
	}

	return (
		<Box sx={{ margin: 1, mb: 4 }}>
			<Paper variant="outlined" sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<TextField
					onChange={handleChange}
					name="name"
					id="name"
					label="Name"
					variant="outlined"
					size="small"
					sx={{
						flexGrow: 1,
						margin: 1,
					}}
					value={profile.name}
				/>
				<TextField
					onChange={handleChange}
					name="ronin_address"
					id="ronin-address"
					label="Ronin Address"
					variant="outlined"
					size="small"
					sx={{
						flexGrow: 1,
						margin: 1,
					}}
					value={profile.ronin_address}
				/>
				<TextField
					onChange={handleChange}
					type="number"
					name="manager_share"
					id="manager-share"
					label="Manager's Share"
					variant="outlined"
					size="small"
					sx={{
						flexGrow: 1,
						margin: 1,
					}}
					value={profile.manager_share}
					inputProps={{ min: 0, max: 100 }}
				/>
				<Button
					onClick={() => {
						onUpdate([...localData, profile]);
						setOpen(true);
						setProfile({
							name: '',
							ronin_address: '',
							manager_share: '',
						});
					}}
					sx={{ alignSelf: 'center', flexGrow: 1, margin: 1 }}
					variant="contained"
				>
					Add Scholar
				</Button>
			</Paper>
			<Snackbar onClose={handleClose} open={open} type="add" />
		</Box>
	);
}

export default Form;

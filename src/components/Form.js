import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import SnackBar from './SnackBar';

function Form(props) {
	const { localData, onUpdate, numScholars } = props;

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [profile, setProfile] = useState({
		name: '',
		ronin_address: '',
		manager_share: '',
	});
	const [isValid, setIsValid] = useState({
		name: true,
		ronin_address: true,
		manager_share: true,
		name_error_message: '',
		ronin_error_message: '',
		manager_error_message: '',
	});

	function handleSnackbarClose(_, reason) {
		if (reason === 'clickaway') {
			return;
		}
		setSnackbarOpen(false);
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setProfile((prevProfile) => {
			return {
				...prevProfile,
				[name]: value,
			};
		});
	}

	function handleBlur(event) {
		const { name, value } = event.target;

		setIsValid((prevIsValid) => {
			if (name === 'name') {
				if (!value) {
					return {
						...prevIsValid,
						name: false,
						name_error_message: 'Scholar name is required',
					};
				} else {
					const index = localData.findIndex(
						(scholar) => scholar.name.toLowerCase() === value.toLowerCase()
					);
					if (index !== -1) {
						return {
							...prevIsValid,
							name: false,
							name_error_message: 'Scholar name already exists',
						};
					}
					return {
						...prevIsValid,
						name: true,
						name_error_message: '',
					};
				}
			} else if (name === 'ronin_address') {
				if (!value) {
					return {
						...prevIsValid,
						ronin_address: false,
						ronin_error_message: 'Ronin address is required',
					};
				} else {
					const index = localData.findIndex(
						(scholar) => scholar.ronin_address.toLowerCase() === value.toLowerCase()
					);
					if (index !== -1) {
						return {
							...prevIsValid,
							ronin_address: false,
							ronin_error_message: 'Ronin address already exists',
						};
					} else {
						if (value.match(/^ronin:[a-zA-Z0-9]{40}$/)) {
							return {
								...prevIsValid,
								ronin_address: true,
								ronin_error_message: '',
							};
						} else {
							return {
								...prevIsValid,
								ronin_address: false,
								ronin_error_message: 'Invalid ronin address',
							};
						}
					}
				}
			} else if (name === 'manager_share') {
				if (!value) {
					return {
						...prevIsValid,
						manager_share: false,
						manager_error_message: `Manager share is required`,
					};
				} else {
					if (value < 0 || value > 100) {
						return {
							...prevIsValid,
							manager_share: false,
							manager_error_message: `Manager share must be 0 - 100`,
						};
					}
					return {
						...prevIsValid,
						manager_share: true,
						manager_error_message: '',
					};
				}
			}
		});
	}

	return (
		<Box>
			<Grid container spacing={2} sx={{ mb: 6 }}>
				<Grid item xs={12} sm={6} md={3}>
					<TextField
						fullWidth
						error={!isValid.name}
						helperText={isValid.name_error_message}
						onChange={handleChange}
						onBlur={handleBlur}
						name="name"
						id="name"
						label="Scholar Name"
						variant="outlined"
						size="small"
						value={profile.name}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<TextField
						fullWidth
						error={!isValid.ronin_address}
						helperText={isValid.ronin_error_message}
						onChange={handleChange}
						onBlur={handleBlur}
						name="ronin_address"
						id="ronin-address"
						label="Ronin Address"
						variant="outlined"
						size="small"
						value={profile.ronin_address}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<TextField
						fullWidth
						error={!isValid.manager_share}
						helperText={isValid.manager_error_message}
						onChange={handleChange}
						onBlur={handleBlur}
						type="number"
						name="manager_share"
						id="manager-share"
						label="Manager Share (%)"
						variant="outlined"
						size="small"
						value={profile.manager_share}
						inputProps={{ min: 0, max: 100 }}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Button
						fullWidth
						onClick={() => {
							if (
								isValid.name &&
								isValid.ronin_address &&
								isValid.manager_share &&
								profile.name &&
								profile.ronin_address &&
								profile.manager_share
							) {
								if (numScholars >= 100) {
									alert('Only 100 scholars are allowed at the moment.');
								} else {
									onUpdate([...localData, profile], false);
									setSnackbarOpen(true);
									setProfile({
										name: '',
										ronin_address: '',
										manager_share: '',
									});
								}
							} else {
								// alert('Invalid form inputs');
							}
						}}
						type="submit"
						size="medium"
						variant="contained"
						disableElevation
					>
						Add Scholar
					</Button>
				</Grid>
			</Grid>
			<SnackBar onClose={handleSnackbarClose} open={snackbarOpen} type="add" />
		</Box>
	);
}

export default Form;

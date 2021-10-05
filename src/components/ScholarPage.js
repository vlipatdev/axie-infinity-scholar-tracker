import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import SnackBar from './SnackBar';

function ScholarPage(props) {
	const scholarName = useParams().name;
	const history = useHistory();

	const { localData, onUpdate } = props;

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [profile, setProfile] = useState({
		name: '',
		ronin_address: '',
		manager_share: '',
	});
	const [isValid, setIsValid] = useState({
		name: true,
		manager_share: true,
		name_error_message: '',
		manager_error_message: '',
	});

	useEffect(() => {
		document.body.style.cursor = 'default';

		// redirect if scholar name does not exist
		const scholarIndex = localData.findIndex((scholar) => scholar.name === scholarName);
		if (localData.length > 0 && scholarIndex === -1) {
			history.push('/');
		}

		const scholarProfile = localData.filter((scholar) => scholar.name === scholarName)[0];
		if (scholarProfile !== undefined) {
			setProfile({
				name: scholarProfile.name,
				ronin_address: scholarProfile.ronin_address,
				manager_share: scholarProfile.manager_share,
			});
		}
	}, [localData]);

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

		setIsValid((prevValid) => {
			if (name === 'name') {
				if (!value) {
					return {
						...prevValid,
						name: false,
						name_error_message: 'Scholar name is required',
					};
				} else if (value === scholarName) {
					return {
						...prevValid,
						name: true,
						name_error_message: '',
					};
				} else {
					const index = localData.findIndex(
						(scholar) => scholar.name.toLowerCase() === value.toLowerCase()
					);
					if (index !== -1) {
						return {
							...prevValid,
							name: false,
							name_error_message: 'Scholar name already exists',
						};
					}
					return {
						...prevValid,
						name: true,
						name_error_message: '',
					};
				}
			} else if (name === 'manager_share') {
				if (!value) {
					return {
						...prevValid,
						manager_share: false,
						manager_error_message: `Manager share is required`,
					};
				} else {
					if (value < 0 || value > 100) {
						return {
							...prevValid,
							manager_share: false,
							manager_error_message: `Manager share must be 0 - 100`,
						};
					}
					return {
						...prevValid,
						manager_share: true,
						manager_error_message: '',
					};
				}
			}
		});
	}

	return (
		<Box>
			<Typography variant="h6" sx={{ mb: 4 }}>
				Edit details for "{scholarName}"
			</Typography>
			<Grid container spacing={2} sx={{ mb: 6 }}>
				<Grid item xs={12}>
					<TextField
						autoFocus
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

				<Grid item xs={12}>
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
				<Grid item xs={12}>
					<TextField
						fullWidth
						name="ronin_address"
						id="ronin-address"
						label="Ronin Address"
						variant="outlined"
						size="small"
						value={profile.ronin_address}
						disabled
					/>
				</Grid>
				<Grid item xs={6}>
					<Button
						fullWidth
						onClick={() => {
							history.goBack();
						}}
						size="medium"
						variant="outlined"
						disableElevation
					>
						Cancel
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						fullWidth
						onClick={() => {
							if (isValid.name && isValid.manager_share && profile.name && profile.manager_share) {
								onUpdate(
									[...localData.filter((scholar) => scholar.name !== scholarName), profile],
									false
								);
								history.goBack();
							} else {
								// alert('Invalid form inputs');
							}
						}}
						type="submit"
						size="medium"
						variant="contained"
						disableElevation
					>
						Save
					</Button>
				</Grid>
			</Grid>
			<SnackBar onClose={handleSnackbarClose} open={snackbarOpen} type="update" />
		</Box>
	);
}

export default ScholarPage;

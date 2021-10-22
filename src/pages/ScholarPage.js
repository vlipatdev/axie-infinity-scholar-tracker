import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { FromDeleteContext } from '../contexts/FromDeleteContext';
import { LocalDataContext } from '../contexts/LocalDataContext';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import SnackBar from '../components/SnackBar';

function ScholarPage() {
	const { setFromDelete } = useContext(FromDeleteContext);
	const { localData, setLocalData } = useContext(LocalDataContext);

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [profile, setProfile] = useState({
		name: '',
		ronin_address: '',
		manager_share: '',
	});

	const scholarName = useParams().name;
	const history = useHistory();

	useEffect(() => {
		// redirect if scholar name does not exist
		const scholarIndex = localData.findIndex((scholar) => scholar.name === scholarName);
		if (localData.length > 0 && scholarIndex === -1) {
			setFromDelete(false);
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

	const validationSchema = yup.object({
		name: yup
			.string()
			.required('Name is required')
			.test('isDuplicate', 'Scholar name already exists', (value) => {
				if (value) {
					if (value === scholarName) {
						return true;
					} else {
						const index = localData.findIndex(
							(scholar) => scholar.name.toLowerCase() === value.toLowerCase()
						);
						return index === -1;
					}
				}
			}),
		manager_share: yup
			.number()
			.required('Manager share is required')
			.min(0, 'Manager share must be 0 - 100')
			.max(100, 'Manager share must be 0 - 100'),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: profile.name,
			ronin_address: profile.ronin_address,
			manager_share: profile.manager_share,
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			const newValues = { ...values, manager_share: values.manager_share.toString() };
			setLocalData([...localData.filter((scholar) => scholar.name !== scholarName), newValues]);
			history.goBack();
		},
	});

	function handleSnackbarClose(_, reason) {
		if (reason === 'clickaway') {
			return;
		}
		setSnackbarOpen(false);
	}

	return (
		<Box>
			<Typography variant="h6" sx={{ mb: 4 }}>
				Edit details of "{scholarName}"
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={2} sx={{ mb: 6 }}>
					<Grid item xs={12}>
						<TextField
							autoFocus
							fullWidth
							name="name"
							id="name"
							label="Scholar Name"
							variant="outlined"
							size="small"
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							type="number"
							name="manager_share"
							id="manager-share"
							label="Manager Share (%)"
							variant="outlined"
							size="small"
							error={formik.touched.manager_share && Boolean(formik.errors.manager_share)}
							helperText={formik.touched.manager_share && formik.errors.manager_share}
							onChange={formik.handleChange}
							value={formik.values.manager_share}
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
							value={formik.values.ronin_address}
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
						<Button fullWidth type="submit" size="medium" variant="contained" disableElevation>
							Save
						</Button>
					</Grid>
				</Grid>
			</form>
			<SnackBar onClose={handleSnackbarClose} open={snackbarOpen} type="update" />
		</Box>
	);
}

export default ScholarPage;

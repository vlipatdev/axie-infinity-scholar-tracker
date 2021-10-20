import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import SnackBar from './SnackBar';

function Form(props) {
	const { localData, onUpdate, numScholars } = props;

	const [snackbarOpen, setSnackbarOpen] = useState(false);

	const validationSchema = yup.object({
		name: yup
			.string()
			.required('Name is required')
			.test('isDuplicate', 'Scholar name already exists', (value) => {
				if (value) {
					const index = localData.findIndex(
						(scholar) => scholar.name.toLowerCase() === value.toLowerCase()
					);
					return index === -1;
				}
			}),
		ronin_address: yup
			.string()
			.required('Ronin address is required')
			.matches(/^ronin:[a-zA-Z0-9]{40}$/, 'Invalid ronin address')
			.test('isDuplicate', 'Ronin address already exists', (value) => {
				if (value) {
					const index = localData.findIndex(
						(scholar) => scholar.ronin_address.toLowerCase() === value.toLowerCase()
					);
					return index === -1;
				}
			}),
		manager_share: yup
			.number()
			.required('Manager share is required')
			.min(0, 'Manager share must be 0 - 100')
			.max(100, 'Manager share must be 0 - 100'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			ronin_address: '',
			manager_share: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (numScholars >= 100) {
				alert('Only 100 scholars are allowed at the moment.');
			} else {
				const newValues = { ...values, manager_share: values.manager_share.toString() };
				onUpdate([...localData, newValues], false);
				setSnackbarOpen(true);
				resetForm();
			}
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
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={2} sx={{ mb: 6 }}>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
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
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							fullWidth
							name="ronin_address"
							id="ronin-address"
							label="Ronin Address"
							variant="outlined"
							size="small"
							error={formik.touched.ronin_address && Boolean(formik.errors.ronin_address)}
							helperText={formik.touched.ronin_address && formik.errors.ronin_address}
							onChange={formik.handleChange}
							value={formik.values.ronin_address}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
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
					<Grid item xs={12} sm={6} md={3}>
						<Button fullWidth type="submit" size="medium" variant="contained" disableElevation>
							Add Scholar
						</Button>
					</Grid>
				</Grid>
			</form>
			<SnackBar onClose={handleSnackbarClose} open={snackbarOpen} type="add" />
		</Box>
	);
}

export default Form;

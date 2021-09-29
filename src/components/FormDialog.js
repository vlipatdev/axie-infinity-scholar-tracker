import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
	const { open, onClose, onSave, localData } = props;

	const [profile, setProfile] = useState({
		name: '',
		ronin_address: '',
		manager_share: '',
	});

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
		<div>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Edit Details for {profile.name}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{/* To subscribe to this website, please enter your email address here. We will send updates
						occasionally. */}
					</DialogContentText>
					<TextField
						required
						onChange={handleChange}
						fullWidth
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
						required
						onChange={handleChange}
						type="number"
						fullWidth
						name="manager_share"
						id="manager-share"
						label="Manager's Share"
						variant="outlined"
						size="small"
						sx={{
							flexGrow: 1,
							margin: 1,
						}}
						inputProps={{ min: 0, max: 100 }}
						value={profile.manager_share}
					/>
					<TextField
						disabled
						required
						onChange={handleChange}
						fullWidth
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
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button
						variant="contained"
						onClick={() => {
							// console.log(profile);
							// onSave(profile);
						}}
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

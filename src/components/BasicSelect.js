import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="select-label">Order by</InputLabel>
				<Select
					labelId="select-label"
					id="simple-select"
					value={age}
					label="Order by"
					onChange={handleChange}
				>
					<MenuItem value={'name'}>Name</MenuItem>
					<MenuItem value={'next'}>Next Claim</MenuItem>
					<MenuItem value={'total'}>Total SLP</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

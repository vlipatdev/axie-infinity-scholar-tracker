import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortTypeSelect(props) {
	const { onUpdate, localSettings } = props;
	const [sortType, setSortType] = useState('');

	useEffect(() => {
		setSortType(localSettings.sort_type);
	}, [localSettings]);

	const handleChange = (event) => {
		setSortType(event.target.value);
		onUpdate(event);
	};

	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel id="select-label"></InputLabel>
				<Select
					sx={{ margin: 2, minWidth: '150px' }}
					variant="standard"
					labelId="select-label"
					name="sort_type"
					id="sort-select"
					value={sortType}
					label="Asc/Desc"
					onChange={handleChange}
				>
					<MenuItem value={'ascending'}>Ascending</MenuItem>
					<MenuItem value={'descending'}>Descending</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

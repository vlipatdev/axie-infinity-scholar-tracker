import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SortTypeSelect(props) {
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
				<InputLabel id="sort-type-select-label"></InputLabel>
				<Select
					sx={{ m: 2, minWidth: '125px' }}
					variant="standard"
					labelId="sort-type-select-label"
					name="sort_type"
					id="sort-type-select"
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

export default SortTypeSelect;

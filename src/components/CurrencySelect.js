import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function CurrencySelect(props) {
	const { onUpdate, localSettings } = props;

	const [currency, setCurrency] = useState('');

	useEffect(() => {
		setCurrency(localSettings.currency);
	}, [localSettings]);

	const handleChange = (event) => {
		setCurrency(event.target.value);
		onUpdate(event);
	};

	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel id="currency-select-label"></InputLabel>
				<Select
					sx={{ m: 2, minWidth: '125px' }}
					variant="standard"
					name="currency"
					labelId="currency-select-label"
					id="currency-select"
					value={currency}
					label="Currency"
					onChange={handleChange}
				>
					<MenuItem value={'php'}>PHP</MenuItem>
					<MenuItem value={'usd'}>USD</MenuItem>
					<MenuItem value={'sgd'}>SGD</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

export default CurrencySelect;

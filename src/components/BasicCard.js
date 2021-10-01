import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import slpLogo from '../assets/images/slp_logo.png';

import { addCommaToNumber } from '../helpers';

function BasicCard(props) {
	const { label, slp, slpPrice, currency } = props;

	return (
		<Card
			variant="outlined"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<CardContent>
				<Typography sx={{ fontSize: 16, textAlign: 'center' }} color="text.secondary" gutterBottom>
					{label}
				</Typography>
				<Box sx={{ display: 'flex', m: 1, alignItems: 'center' }}>
					<Avatar alt="slp icon" src={slpLogo} sx={{ m: 1, height: 40, width: 40 }} />
					<Typography sx={{ fontSize: 24, fontWeight: 'bold' }} variant="h5" component="div">
						{addCommaToNumber(slp)}
					</Typography>
				</Box>
				<Typography sx={{ textAlign: 'center' }} color="text.secondary">
					≈ {addCommaToNumber((slp * slpPrice).toFixed(0))} {currency.toUpperCase()}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default BasicCard;

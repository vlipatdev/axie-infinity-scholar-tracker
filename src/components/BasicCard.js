import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { addCommasToNumber } from '../helpers';

import slpIcon from '../assets/images/slp.png';

function BasicCard(props) {
	const { label, slp, slpPrice } = props;

	return (
		<Card
			variant="outlined"
			sx={{
				margin: 1,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
				flexBasis: 0,
			}}
		>
			<CardContent>
				<Typography sx={{ fontSize: 16, textAlign: 'center' }} color="text.secondary" gutterBottom>
					{label}
				</Typography>
				<Box sx={{ display: 'flex', margin: 1, alignItems: 'center' }}>
					<Avatar alt="slp icon" src={slpIcon} sx={{ margin: 1, height: 25, width: 25 }} />
					<Typography sx={{ fontSize: 30, fontWeight: 'bold' }} variant="h5" component="div">
						{addCommasToNumber(slp)}
					</Typography>
				</Box>

				<Typography sx={{ textAlign: 'center' }} color="text.secondary">
					≈ ₱{addCommasToNumber((slp * slpPrice).toFixed(0))}
				</Typography>
				{/* <Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography> */}
			</CardContent>
		</Card>
	);
}

export default BasicCard;

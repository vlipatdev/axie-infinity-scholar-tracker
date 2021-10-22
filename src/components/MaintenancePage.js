import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import axie from '../images/axie.png';

function MaintenancePage() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				mt: 15,
				mb: 15,
			}}
		>
			<img src={axie} alt="axie" style={{ height: '150px', margin: '32px' }} />
			<Typography sx={{ mb: 10 }} color="text.secondary">
				We're down for maintenance. We'll be back up shortly.
			</Typography>
		</Box>
	);
}

export default MaintenancePage;

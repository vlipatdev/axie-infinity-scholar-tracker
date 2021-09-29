import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ExportButton() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
			<Button variant="outlined">Export Excel CSV</Button>
		</Box>
	);
}

export default ExportButton;

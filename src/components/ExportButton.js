import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function ExportButton() {
	return (
		<Button
			sx={{ margin: 1, minWidth: '250px' }}
			variant="contained"
			color="success"
			startIcon={<DownloadIcon />}
		>
			Export Excel
		</Button>
	);
}

export default ExportButton;

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function ExportButton() {
	return (
		<Button
			sx={{ margin: 1, minWidth: '200px' }}
			variant="contained"
			color="success"
			disableElevation
			startIcon={<DownloadIcon />}
		>
			Export Excel
		</Button>
	);
}

export default ExportButton;

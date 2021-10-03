import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';

function ExportCSVButton() {
	return (
		<Tooltip title="Download data in .csv format">
			<Button
				sx={{ m: 1, minWidth: '200px' }}
				variant="contained"
				color="success"
				disableElevation
				startIcon={<DownloadIcon />}
			>
				Export Excel
			</Button>
		</Tooltip>
	);
}

export default ExportCSVButton;

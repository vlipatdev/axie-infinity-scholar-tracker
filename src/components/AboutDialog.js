import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AboutDialog(props) {
	const { open, onClose } = props;
	return (
		<div>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>About</DialogTitle>
				<DialogContent>
					<DialogContentText>
						SLP Price courtesy of CoinGecko https://www.coingecko.com/en/api
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Okay</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

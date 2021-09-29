import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';

import profile from '../assets/images/profile.png';

import { Paper } from '@mui/material';

export default function AboutDialog(props) {
	const { open, onClose } = props;
	return (
		<div>
			<Dialog open={open} onClose={onClose} fullWidth>
				<DialogTitle>About</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								mt: 10,
								mb: 10,
							}}
						>
							<Avatar src={profile} sx={{ margin: 2, height: 40, width: 40 }} />
							<Typography sx={{ fontSize: 14 }}>
								by{' '}
								<a
									style={{ textDecoration: 'none', color: '#1976D2' }}
									href="https://github.com/vlipatdev"
								>
									vlipatdev
								</a>{' '}
								with ❤️
							</Typography>
						</Box>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Okay</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

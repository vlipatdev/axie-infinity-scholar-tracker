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
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>About</DialogTitle>
				<DialogContent>
					<DialogContentText>
						"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
						voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
						occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
						mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
						expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
						nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
						est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
						rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
						recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
						voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
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

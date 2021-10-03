import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import profile from '../assets/images/profile.jpg';

import theme from '../theme';

function AboutDialog(props) {
	const { open, onClose } = props;

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>About</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<Box>
						<Typography>
							Unofficial scholar tracker for{' '}
							<a
								href="https://axieinfinity.com/"
								style={{ textDecoration: 'none', color: theme.palette.primary.main }}
							>
								Axie Infinity
							</a>
							.
						</Typography>
						<br />
						<Typography>
							Future releases will include daily SLP data, table customization, multiple currencies,
							JSON support for other trackers, dark mode, and more.
						</Typography>
						<br />
						<Typography>
							Data provided by{' '}
							<a
								href="https://skymavis.com/"
								style={{ textDecoration: 'none', color: theme.palette.primary.main }}
							>
								Sky Mavis
							</a>
							. Crypto prices courtesy of{' '}
							<a
								href="https://www.coingecko.com/en/api"
								style={{ textDecoration: 'none', color: theme.palette.primary.main }}
							>
								CoinGecko
							</a>
							.
						</Typography>
						<br />
						<Typography>
							<a
								href="mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject= Axie Scholar Tracker Bug"
								style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
							>
								Report bugs or send suggestions
							</a>
							.
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							mt: 4,
						}}
					>
						<Avatar src={profile} sx={{ mr: 1, height: 35, width: 35 }} />
						<Typography color="text.primary" sx={{ fontSize: 14 }}>
							by{' '}
							<a
								style={{ textDecoration: 'none', color: theme.palette.primary.main }}
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
	);
}

export default AboutDialog;

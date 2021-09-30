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

function AboutDialog(props) {
	const { open, onClose } = props;
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>About</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<Box>
						<Typography>
							This is an unofficial scholar tracker for{' '}
							<a
								href="https://axieinfinity.com/"
								style={{ textDecoration: 'none', color: '#1976D2' }}
							>
								Axie Infinity
							</a>
							.
						</Typography>
						<Typography>
							This site supports JSON import from{' '}
							<a
								href="https://axie-scho-tracker.xyz/"
								style={{ textDecoration: 'none', color: '#1976D2' }}
							>
								https://axie-scho-tracker.xyz/
							</a>
							.
						</Typography>
						<br />
						<Typography>
							This site's data is saved in your browser's local storage. Clearing your browser's
							cache will erase this data. Make sure to export JSON first.
						</Typography>
						<br />
						<Typography>
							Future releases will included daily SLP data, dark mode, table customization, support
							for multiple currencies, and more.
						</Typography>

						<br />
						<Typography>
							Data provided by{' '}
							<a href="https://skymavis.com/" style={{ textDecoration: 'none', color: '#1976D2' }}>
								Sky Mavis
							</a>
							.
						</Typography>
						<Typography>
							Crypto prices courtesy of{' '}
							<a
								href="https://www.coingecko.com/en/api"
								style={{ textDecoration: 'none', color: '#1976D2' }}
							>
								CoinGecko
							</a>
							.
						</Typography>
						<br />
						<Typography>
							<a
								style={{ color: '#1976D2', textDecoration: 'none' }}
								href="mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject=Axie Scholar Tracker Bug"
							>
								Report errors or bugs
							</a>
							.
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							mt: 4,
						}}
					>
						<Avatar src={profile} sx={{ m: 2, height: 40, width: 40 }} />
						<Typography sx={{ fontSize: 14 }}>
							coded by{' '}
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
	);
}

export default AboutDialog;

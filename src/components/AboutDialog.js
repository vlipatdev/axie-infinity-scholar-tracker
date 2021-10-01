import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import profile from '../assets/images/profile.jpg';

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
								style={{ textDecoration: 'none', color: '#1976D2' }}
							>
								Axie Infinity
							</a>
							.
						</Typography>
						{/* <br />
						<Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
							✨ Features
						</Typography>
						<br /> */}
						{/* <Typography color="text.primary" sx={{ fontWeight: 'bold' }}></Typography>
						<br />
						<Typography>
							This site's data is saved in your browser's local storage. Clearing your browser's
							cache will erase this data. Make sure to export JSON first to avoid losing data.
						</Typography>
						<br />
						<Typography>
							Importing JSON will override current data. Only up to 100 ronin addresses are
							supported at the moment.
						</Typography>
						<br />
						<Typography>
							This site supports JSON import from{' '}
							<a
								href="https://axie-scho-tracker.xyz/"
								style={{ textDecoration: 'none', color: '#1976D2' }}
							>
								https://axie-scho-tracker.xyz/
							</a>
							.
						</Typography> */}

						<br />
						<Typography>
							Future releases will include scholar search, daily SLP data, dark mode, table
							customization, table pagination, multiple currencies, JSON support from other
							trackers, and more.
						</Typography>

						<br />
						<Typography>
							Data provided by{' '}
							<a href="https://skymavis.com/" style={{ textDecoration: 'none', color: '#1976D2' }}>
								Sky Mavis
							</a>
							. Crypto prices courtesy of{' '}
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
						<Avatar src={profile} sx={{ mr: 1, height: 40, width: 40 }} />
						<Typography color="text.primary" sx={{ fontSize: 14 }}>
							coded by{' '}
							<a
								style={{ textDecoration: 'none', color: '#1976D2' }}
								href="https://www.facebook.com/xf606bZhSFYbORVF/"
							>
								vlipat
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

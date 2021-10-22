import Box from '@mui/material/Box';

import NavBar from '../components/NavBar';

import axieLogo from '../images/axie_logo.png';
import background from '../images/background.jpg';

import theme from '../theme';

function Header() {
	return (
		<Box
			sx={{
				backgroundPosition: 'center',
				backgroundColor: theme.palette.primary.main,
				backgroundImage: `linear-gradient(rgba(21, 101, 192, 0.8),rgba(21, 101, 192, 0.95)),url(${background})`,
			}}
		>
			<NavBar />
			<Box
				sx={{
					height: '200px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					mb: 2,
				}}
			>
				<img
					src={axieLogo}
					alt="axie logo"
					style={{
						height: '80px',
						marginBottom: '16px',
					}}
				/>
			</Box>
		</Box>
	);
}

export default Header;

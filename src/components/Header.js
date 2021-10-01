import Box from '@mui/material/Box';

import NavBar from './NavBar';

import axieLogo from '../assets/images/axie_logo.png';

function Header() {
	return (
		<Box
			sx={{
				backgroundColor: '#1976D2',
				// backgroundImage: `url('https://www.transparenttextures.com/patterns/axiom-pattern.png')`, // TODO: Replace with local file
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
				<img src={axieLogo} alt="axie logo" style={{ height: '100px', marginBottom: '16px' }} />
			</Box>
		</Box>
	);
}

export default Header;

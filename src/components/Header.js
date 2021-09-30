import Box from '@mui/material/Box';

import axieLogo from '../assets/images/axie_logo.png';

function Header() {
	return (
		<Box
			sx={{
				height: '200px',
				backgroundColor: '#1976D2',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				mb: 2,
				backgroundImage: `url('https://www.transparenttextures.com/patterns/axiom-pattern.png')`,
			}}
		>
			<img src={axieLogo} alt="axie logo" style={{ height: '75px', marginBottom: '16px' }} />
		</Box>
	);
}

export default Header;

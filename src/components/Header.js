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
				backgroundImage: `url('https://www.transparenttextures.com/patterns/axiom-pattern.png')`, // TODO: Replace with local file
			}}
		>
			<img src={axieLogo} alt="axie logo" style={{ height: '100px', marginBottom: '16px' }} />
		</Box>
	);
}

export default Header;

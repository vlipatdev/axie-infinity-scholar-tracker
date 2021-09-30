import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import profile from '../assets/images/profile.png';

function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				mt: 10,
			}}
		>
			<Avatar src={profile} sx={{ margin: 2, height: 40, width: 40 }} />
			<Typography sx={{ fontSize: 14 }}>
				by{' '}
				<a style={{ textDecoration: 'none', color: '#1976D2' }} href="https://github.com/vlipatdev">
					vlipatdev
				</a>{' '}
				with ❤️
			</Typography>
		</Box>
	);
}

export default Footer;

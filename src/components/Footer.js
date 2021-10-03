import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import theme from '../theme';

function Footer() {
	function handleClick() {
		navigator.clipboard.writeText('ronin:7587459e4c00420a218c35abec543cc9d22e45d1');
	}

	function handleMouseEnter() {
		document.body.style.cursor = 'pointer';
	}

	function handleMouseLeave() {
		document.body.style.cursor = 'default';
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				mt: 10,
			}}
		>
			<Box>
				<Typography
					sx={{
						fontSize: 14,
						[theme.breakpoints.down('md')]: {
							fontSize: 12,
						},
						textAlign: 'center',
					}}
				>
					Donate
				</Typography>
				<Tooltip
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					title="Click to copy"
				>
					<Typography
						sx={{
							fontSize: 14,
							[theme.breakpoints.down('md')]: {
								fontSize: 12,
							},
							mb: 4,
							textAlign: 'center',
							color: theme.palette.primary.main,
						}}
					>
						ronin:7587459e4c00420a218c35abec543cc9d22e45d1
					</Typography>
				</Tooltip>
			</Box>
		</Box>
	);
}

export default Footer;

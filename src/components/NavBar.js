import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AboutDialog from './AboutDialog';

import theme from '../theme';

import axsLogo from '../assets/images/axs_logo.png';

function NavBar() {
	const [open, setOpen] = useState(false);

	function handleClick() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<AppBar sx={{ background: 'none' }} elevation={0} position="static">
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<Avatar alt="slp icon" src={axsLogo} />
				</IconButton>
				<Typography
					variant="h1"
					component="div"
					sx={{
						flexGrow: 1,
						fontSize: 24,
						[theme.breakpoints.down('md')]: {
							fontSize: 18,
						},
					}}
				>
					Axie Scholar Tracker
				</Typography>
				<Tooltip title="About">
					<Button onClick={handleClick} sx={{ color: '#FFFFFF' }}>
						<InfoOutlinedIcon />
					</Button>
				</Tooltip>
			</Toolbar>
			<AboutDialog open={open} onClose={handleClose} />
		</AppBar>
	);
}

export default NavBar;

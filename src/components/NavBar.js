import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AboutDialog from './AboutDialog';

import slp from '../assets/images/slp.png';

function NavBar() {
	const [open, setOpen] = useState(false);

	function handleClick() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<AppBar sx={{ mb: 4 }} position="static">
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<Avatar alt="slp icon" src={slp} />
				</IconButton>
				<Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: 24 }}>
					Axie Scholar Tracker
				</Typography>
				<Button onClick={handleClick} sx={{ color: '#FFFFFF' }}>
					About
				</Button>
			</Toolbar>
			<AboutDialog open={open} onClose={handleClose} />
		</AppBar>
	);
}

export default NavBar;

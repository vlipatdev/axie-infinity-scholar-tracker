import { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import AboutDialog from './AboutDialog';

import theme from '../theme';

import axsLogo from '../images/axs_logo.png';

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
				<Link to="/">
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<Avatar alt="axs logo" src={axsLogo} />
					</IconButton>
				</Link>
				<Typography
					variant="h1"
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
					<Button onClick={handleClick} sx={{ color: 'white' }}>
						<InfoOutlinedIcon />
					</Button>
				</Tooltip>
			</Toolbar>
			<AboutDialog open={open} onClose={handleClose} />
		</AppBar>
	);
}

export default NavBar;

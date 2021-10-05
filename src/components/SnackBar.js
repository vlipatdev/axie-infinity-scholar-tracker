import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert icon={<CheckIcon />} ref={ref} variant="filled" {...props} />;
});

function SnackBar(props) {
	const { onClose, open, type } = props;

	const action = (
		<React.Fragment>
			<IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar open={open} autoHideDuration={5000} onClose={onClose} action={action}>
				<Alert onClose={onClose} severity="info" sx={{ width: '100%' }}>
					{type === 'add' ? 'Scholar added' : 'Scholar updated'}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default SnackBar;

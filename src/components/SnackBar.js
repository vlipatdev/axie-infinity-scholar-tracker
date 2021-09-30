import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert icon={<CheckIcon />} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar(props) {
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
			<Snackbar open={open} autoHideDuration={6000} onClose={onClose} action={action}>
				<Alert
					onClose={onClose}
					severity={type === 'success' ? 'info' : 'error'}
					sx={{ width: '100%' }}
				>
					{type === 'success' ? 'Scholar added' : 'Successfully removed'}
				</Alert>
			</Snackbar>
		</div>
	);
}

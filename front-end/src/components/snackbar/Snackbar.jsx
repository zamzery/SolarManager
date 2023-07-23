import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAlert(props) {
	const [open, setOpen] = React.useState(props.open);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar open={open} autoHideDuration={6000} severity={props.severity} >
				<Alert onClose={handleClose} onClick={handleClick} severity={props.severity} sx={{ width: '100%' }}>
				{props.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}

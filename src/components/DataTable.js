import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import SnackBar from '../components/SnackBar';

import { addCommasToNumber, limitString, sortArray } from '../helpers';

function createData(
	number,
	name,
	average,
	unclaimed,
	manager,
	scholar,
	lastClaim,
	nextClaim,
	mmr,
	del,
	roninAddress
) {
	return {
		number,
		name,
		average,
		unclaimed,
		manager,
		scholar,
		lastClaim,
		nextClaim,
		mmr,
		del,
		roninAddress,
	};
}

export default function DataTable(props) {
	const { data, localData, onDelete, localSettings } = props;
	const [snackBarOpen, setSnackBarOpen] = useState(false);

	let sortedData;
	if (localSettings.sort_type === 'ascending') {
		sortedData = sortArray(data, localSettings.sort_by);
	} else {
		sortedData = sortArray(data, localSettings.sort_by).reverse();
	}

	function handleSnackBarClose(_, reason) {
		if (reason === 'clickaway') {
			return;
		}
		setSnackBarOpen(false);
	}

	function handleMouseEnter() {
		document.body.style.cursor = 'pointer';
	}

	function handleMouseLeave() {
		document.body.style.cursor = 'default';
	}

	function renderDeleteButton(name) {
		return (
			<Tooltip title={`Remove ${name}`}>
				<IconButton color="primary" size="small">
					<DeleteIcon />
				</IconButton>
			</Tooltip>
		);
	}

	function renderMarketplaceLink(name, roninAddress) {
		const url = `https://marketplace.axieinfinity.com/profile/${roninAddress}`;
		return (
			<Tooltip title={`View marketplace profile of ${name}`}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					style={{ textDecoration: 'none', color: '#1976D2' }} // hardcoded color
				>
					{limitString(name)}
				</a>
			</Tooltip>
		);
	}

	const rows = sortedData.map((address, index) => {
		if (address.next_claim_raw === 1209600) {
			return createData(
				index + 1,
				renderMarketplaceLink(address.name, address.ronin_address),
				addCommasToNumber(address.average_slp),
				addCommasToNumber(address.unclaimed_slp),
				`${addCommasToNumber(address.manager_share)} (${address.manager_percent}%)`,
				`${addCommasToNumber(address.scholar_share)} (${address.scholar_percent}%)`,
				'No record',
				'No record',
				address.mmr,
				renderDeleteButton(address.name),
				address.ronin_address
			);
		} else {
			return createData(
				index + 1,
				renderMarketplaceLink(address.name, address.ronin_address),
				addCommasToNumber(address.average_slp),
				addCommasToNumber(address.unclaimed_slp),
				`${addCommasToNumber(address.manager_share)} (${address.manager_percent}%)`,
				`${addCommasToNumber(address.scholar_share)} (${address.scholar_percent}%)`,
				address.last_claim_date,
				address.next_claim_date,
				address.mmr,
				renderDeleteButton(address.name),
				address.ronin_address
			);
		}
	});

	return (
		<>
			<TableContainer component={Paper} variant="outlined" sx={{ mb: 8, maxHeight: '1000px' }}>
				<Table stickyHeader aria-label="data table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Average</TableCell>
							<TableCell align="right">Unclaimed</TableCell>
							<TableCell align="right">Manager</TableCell>
							<TableCell align="right">Scholar</TableCell>
							<TableCell align="right">Last Claim</TableCell>
							<TableCell align="right">Next Claim</TableCell>
							<TableCell align="right">MMR</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								onClick={null}
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.number}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.average}</TableCell>
								<TableCell align="right">{row.unclaimed}</TableCell>
								<TableCell align="right">{row.manager}</TableCell>
								<TableCell align="right">{row.scholar}</TableCell>
								<TableCell align="right">{row.lastClaim}</TableCell>
								<TableCell align="right">{row.nextClaim}</TableCell>
								<TableCell align="right">{row.mmr}</TableCell>
								<TableCell
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									onClick={() => {
										onDelete(
											localData.filter((data) => data.ronin_address !== row.roninAddress),
											true
										);
									}}
									align="right"
								>
									{row.del}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<SnackBar open={snackBarOpen} onClose={handleSnackBarClose} type="delete" />
		</>
	);
}

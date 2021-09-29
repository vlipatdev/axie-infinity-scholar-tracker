import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

import FormDialog from '../components/FormDialog';
import SnackBar from '../components/SnackBar';

import { lastClaimInDays, nextClaimInDays, numberWithCommas, limitString } from '../helpers';

import slpIcon from '../assets/images/slp.png';

function createData(
	number,
	name,
	average,
	total,
	manager,
	scholar,
	lastClaim,
	nextClaim,
	mmr,
	del
) {
	return { number, name, average, total, manager, scholar, lastClaim, nextClaim, mmr, del };
}

export default function DataTable(props) {
	const { data, localData, onDelete, onUpdate, slpPrice } = props;

	const [modalOpen, setModalOpen] = useState(false);

	function handleModalClose() {
		setModalOpen(false);
	}

	function handleModalSave() {
		//
		setModalOpen(false);
	}

	const [snackBarOpen, setSnackBarOpen] = useState(false);

	const handleSnackBarClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackBarOpen(false);
	};

	const rows = data.map((address, index) => {
		if (address.next_claim_date_raw === 1209600) {
			return createData(
				index + 1,
				renderMarketplaceLink(address.name, address.ronin_address),
				// renderAverage(address.average_slp),
				numberWithCommas(address.average_slp),
				numberWithCommas(address.unclaimed_slp),
				`${numberWithCommas(address.manager_share)} (${address.manager_percent}%)`,
				`${numberWithCommas(address.scholar_share)} (${address.scholar_percent}%)`,
				'No record',
				'No record',
				address.mmr,
				// renderEditButton(),
				renderDeleteButton(address.name)
			);
		} else {
			return createData(
				index + 1,
				renderMarketplaceLink(address.name, address.ronin_address),
				// renderAverage(address.average_slp),
				numberWithCommas(address.average_slp),
				numberWithCommas(address.unclaimed_slp),
				`${numberWithCommas(address.manager_share)} (${address.manager_percent}%)`,
				`${numberWithCommas(address.scholar_share)} (${address.scholar_percent}%)`,
				// lastClaimInDays(address.last_claim_in_days),
				address.last_claim_date,
				// nextClaimInDays(address.next_claim_in_days),
				address.next_claim_date,
				address.mmr,
				// renderEditButton(),
				renderDeleteButton(address.name)
			);
		}
	});

	function handleHover() {
		document.body.style.cursor = 'pointer';
	}

	function handleMouseLeave() {
		document.body.style.cursor = 'default';
	}

	// function renderEditButton() {
	// 	return (
	// 		<Tooltip title="Edit">
	// 			<IconButton color="primary" size="small">
	// 				<EditIcon />
	// 			</IconButton>
	// 		</Tooltip>
	// 	);
	// }

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
			<Tooltip title={`Open marketplace profile of ${name}`}>
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

	// function renderAverage(average) {
	// 	return (
	// 		<>
	// 			<Avatar sx={{ height: 25, width: 25, margin: 0 }} src={slpIcon} />
	// 			{average}
	// 		</>
	// 	);
	// }

	return (
		<TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Average</TableCell>
						<TableCell align="right">Unclaimed</TableCell>
						<TableCell align="right">Manager's Share</TableCell>
						<TableCell align="right">Scholar's Share</TableCell>
						<TableCell align="right">Last Claim</TableCell>
						<TableCell align="right">Next Claim</TableCell>
						<TableCell align="right">MMR</TableCell>
						{/* <TableCell align="right">Edit</TableCell> */}
						<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							onClick={null}
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.number}
							</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.average}</TableCell>
							<TableCell align="right">{row.total}</TableCell>
							<TableCell align="right">{row.manager}</TableCell>
							<TableCell align="right">{row.scholar}</TableCell>
							<TableCell align="right">{row.lastClaim}</TableCell>
							<TableCell align="right">{row.nextClaim}</TableCell>
							<TableCell align="right">{row.mmr}</TableCell>
							{/* <TableCell
								onMouseEnter={handleHover}
								onMouseLeave={handleMouseLeave}
								onClick={() => {
									setModalOpen(true);
								}}
								align="right"
							>
								{row.edit}
							</TableCell> */}
							<TableCell
								onMouseEnter={handleHover}
								onMouseLeave={handleMouseLeave}
								onClick={() => {
									console.log(localData.filter((_, index) => index !== row.number - 1));
									onDelete(localData.filter((_, index) => index !== row.number - 1));
									setSnackBarOpen(true);
								}}
								align="right"
							>
								{row.del}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<FormDialog
				open={modalOpen}
				localData={localData}
				onClose={handleModalClose}
				// onSave={(profile) => {
				// setOpen(false);
				// const index = localData.findIndex((item) => item.ronin_address === profile.ronin_address);
				// console.log(index);
				// console.log(profile);
				// }}
			/>
			<SnackBar open={snackBarOpen} onClose={handleSnackBarClose} type="delete" />
		</TableContainer>
	);
}

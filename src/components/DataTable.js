import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { addCommaToNumber, limitString, sortArray, addDaysAgo } from '../helpers';

import theme from '../theme';

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
	edit,
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
		edit,
		del,
		roninAddress,
	};
}

export default function DataTable(props) {
	const { data, localData, onDelete, localSettings } = props;

	let sortedData;
	if (localSettings.sort_type === 'ascending') {
		sortedData = sortArray(data, localSettings.sort_by);
	} else {
		sortedData = sortArray(data, localSettings.sort_by).reverse();
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

	function renderEditButton(name) {
		return (
			<Link
				to={{
					pathname: `/scholar/${name}`,
					state: {
						name: name,
					},
				}}
			>
				<Tooltip title={`Edit details for ${name}`}>
					<IconButton color="primary" size="small">
						<EditIcon />
					</IconButton>
				</Tooltip>
			</Link>
		);
	}

	function handleDelete(row) {
		onDelete(
			localData.filter((data) => data.ronin_address !== row.roninAddress),
			true
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
					style={{ textDecoration: 'none', color: theme.palette.primary.main }}
				>
					{limitString(name)}
				</a>
			</Tooltip>
		);
	}

	const rows = sortedData.map((item, index) => {
		let lastClaim;
		let nextClaim;

		if (item.next_claim_raw === 1209600) {
			lastClaim = 'No record';
			nextClaim = 'No record';
		} else {
			lastClaim = `${addDaysAgo(item.last_claim_in_days)}`;
			nextClaim = item.next_claim_date;
		}

		return createData(
			index + 1,
			item.name,
			// renderMarketplaceLink(item.name, item.ronin_address),
			addCommaToNumber(item.average_slp),
			addCommaToNumber(item.unclaimed_slp),
			`${addCommaToNumber(item.manager_share)} (${item.manager_percent}%)`,
			`${addCommaToNumber(item.scholar_share)} (${item.scholar_percent}%)`,
			lastClaim,
			nextClaim,
			item.mmr,
			renderEditButton(item.name),
			renderDeleteButton(item.name),
			item.ronin_address
		);
	});

	return (
		<>
			<TableContainer component={Paper} variant="outlined" sx={{ mb: 8 }}>
				<Table stickyHeader aria-label="data table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="center">Daily Average</TableCell>
							<TableCell align="center">Unclaimed</TableCell>
							<TableCell align="center">Manager Share</TableCell>
							<TableCell align="center">Scholar Share</TableCell>
							<TableCell align="center">Last Claim</TableCell>
							<TableCell align="center">Next Claim</TableCell>
							<TableCell align="center">MMR</TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.number}
								</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="center">{row.average}</TableCell>
								<TableCell align="center">{row.unclaimed}</TableCell>
								<TableCell align="center">{row.manager}</TableCell>
								<TableCell align="center">{row.scholar}</TableCell>
								<TableCell align="center">{row.lastClaim}</TableCell>
								<TableCell align="center">{row.nextClaim}</TableCell>
								<TableCell align="center">{row.mmr}</TableCell>
								<TableCell
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									align="right"
								>
									{row.edit}
								</TableCell>
								<TableCell
									onClick={() => handleDelete(row)}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									align="right"
								>
									{row.del}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

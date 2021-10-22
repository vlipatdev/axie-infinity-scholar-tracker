import { useContext, useEffect, useState } from 'react';
import { FromDeleteContext } from '../contexts/FromDeleteContext';
import { LocalDataContext } from '../contexts/LocalDataContext';

import { CSVLink } from 'react-csv';
import FileSaver from 'file-saver';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

import styled from '@mui/material/styles/styled';

import SlpCard from '../components/SlpCard';
import CryptoBar from '../components/CryptoBar';
import DataTable from '../components/DataTable';
import ExportCSVButton from '../components/ExportCSVButton';
import Form from '../components/Form';
import SortBySelect from '../components/SortBySelect';
import SortTypeSelect from '../components/SortTypeSelect';

import axie from '../images/axie.png';

import { calcTotal, sortArray } from '../utils';
import { fetchCryptoData, fetchScholarData } from '../requests';

const Input = styled('input')({
	display: 'none',
});

function HomePage() {
	const [addresses, setAddresses] = useState([]);
	const [data, setData] = useState([]);
	const [localSettings, setLocalSettings] = useState({ sort_by: 'name', sort_type: 'ascending' });
	const [currency] = useState('php');
	const [cryptoData, setCryptoData] = useState({
		'smooth-love-potion': {
			[currency]: 0,
			[`${currency}_24h_change`]: 0,
		},
		ethereum: {
			[currency]: 0,
			[`${currency}_24h_change`]: 0,
		},
		'axie-infinity': {
			[currency]: 0,
			[`${currency}_24h_change`]: 0,
		},
	});
	const [isLoading, setIsLoading] = useState(true);

	const { fromDelete, setFromDelete } = useContext(FromDeleteContext); // prevents refetching of data on delete
	const { localData, setLocalData } = useContext(LocalDataContext);

	let sortedData;
	if (localSettings.sort_type === 'ascending') {
		sortedData = sortArray(data, localSettings.sort_by);
	} else {
		sortedData = sortArray(data, localSettings.sort_by).reverse();
	}

	useEffect(() => {
		// get user settings
		const localStorageSettings = JSON.parse(localStorage.getItem('settings'));
		if (localStorageSettings) {
			setLocalSettings(localStorageSettings);
		}

		// get crypto prices
		fetchCryptoData(currency)
			.then((data) => {
				setCryptoData(data);
			})
			.catch(() => {
				alert('Error fetching crypto data. Please try again later.');
			});
	}, []);

	useEffect(() => {
		setAddresses(localData.map((scholar) => scholar.ronin_address));
	}, [localData]);

	useEffect(() => {
		localStorage.setItem('settings', JSON.stringify(localSettings));
	}, [localSettings]);

	useEffect(() => {
		if (addresses.length !== 0) {
			if (!fromDelete) {
				setIsLoading(true);
				// get scholar data
				fetchScholarData(localData, addresses)
					.then((data) => {
						setData(data);
					})
					.catch(() => {
						alert('Cannot connect to the server. Please try again later.');
					})
					.finally(() => {
						setIsLoading(false);
					});
			} else {
				setData(data.filter((item) => addresses.includes(item.ronin_address)));
			}
		} else {
			setData([]);
		}
	}, [addresses]);

	function handleLocalDataUpdate(data) {
		setLocalData(data);
	}

	function handleJSONDownload(data) {
		const fileName = 'scholars.json';
		const fileToSave = new Blob([JSON.stringify(data, null, 2)], {
			type: 'application/json',
		});

		FileSaver.saveAs(fileToSave, fileName);
	}

	function handleJSONUpload(event) {
		const fileReader = new FileReader();
		if (event.target.files[0]) {
			fileReader.readAsText(event.target.files[0], 'UTF-8');
			fileReader.onload = (event) => {
				setFromDelete(false);
				const JSONdata = JSON.parse(event.target.result);
				// very simple JSON validation
				if (JSONdata[0].name && JSONdata[0].ronin_address && JSONdata[0].manager_share) {
					if (JSONdata.length > 100) {
						alert('Only JSON files with max 100 ronin addresses are allowed at the moment.');
					} else {
						setLocalData(JSONdata);
					}
					// very simple validation for JSON from https://axie-scho-tracker.xyz/
				} else if (JSONdata[0].name && JSONdata[0].eth && JSONdata[0].managerShare) {
					if (JSONdata.length > 100) {
						alert('Only JSON files with max 100 ronin addresses are allowed at the moment.');
					} else {
						const convertedJSONData = JSONdata.map((item) => {
							return {
								name: item.name,
								ronin_address: item.eth,
								manager_share: item.managerShare,
							};
						});
						setLocalData(convertedJSONData);
					}
				} else {
					alert(
						'Incompatible JSON structure.\n\nOnly exported JSON from this site and https://axie-scho-tracker.xyz/ are accepted at the moment.\n\nSupport for other trackers will be added in the future.'
					);
				}
			};
		}
	}

	function cleanData(data) {
		return data.map((item) => {
			const {
				last_updated,
				ronin_address,
				name,
				average_slp,
				unclaimed_slp,
				claimed_slp,
				total_slp,
				last_claim_date,
				next_claim_date,
				manager_percent,
				scholar_percent,
				manager_share,
				scholar_share,
				mmr,
				rank,
			} = item;

			return {
				last_updated,
				name,
				ronin_address,
				average_slp,
				unclaimed_slp,
				claimed_slp,
				total_slp,
				last_claim_date,
				next_claim_date,
				manager_percent,
				scholar_percent,
				manager_share,
				scholar_share,
				mmr,
				rank,
			};
		});
	}

	function handleSortUpdate(event) {
		const { name, value } = event.target;
		setLocalSettings((prevSettings) => {
			return { ...prevSettings, [name]: value };
		});
	}

	return (
		<>
			<CryptoBar data={cryptoData} currency={currency} />
			<Alert sx={{ mb: 4 }} severity="info">
				Only up to 100 scholars are supported at the moment.
			</Alert>
			<Grid
				container
				spacing={2}
				sx={{
					mb: 6,
				}}
			>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Total Daily Average"
						slp={calcTotal(data, 'average_slp')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Total Unclaimed"
						slp={calcTotal(data, 'unclaimed_slp')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Total Claimed"
						slp={calcTotal(data, 'claimed_slp')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Total Farmed"
						slp={calcTotal(data, 'total_slp')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Manager Total"
						slp={calcTotal(data, 'manager_share')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
				<Grid item xs={6} sm={4} lg={2}>
					<SlpCard
						label="Scholar Total"
						slp={calcTotal(data, 'scholar_share')}
						slpPrice={cryptoData['smooth-love-potion'][currency]}
						currency={currency}
					/>
				</Grid>
			</Grid>
			<Form localData={localData} onUpdate={handleLocalDataUpdate} numScholars={addresses.length} />
			{addresses.length !== 0 && (
				<>
					{isLoading ? (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '200px',
							}}
						>
							<CircularProgress />
						</Box>
					) : (
						<>
							<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
								<Typography color="text.secondary">Sort by</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
									<SortBySelect onUpdate={handleSortUpdate} localSettings={localSettings} />
									<SortTypeSelect onUpdate={handleSortUpdate} localSettings={localSettings} />
								</Box>
							</Box>
							<DataTable
								data={data}
								localData={localData}
								localSettings={localSettings}
								onDelete={handleLocalDataUpdate}
								slpPrice={cryptoData['smooth-love-potion'][currency]}
							/>
							<Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
								<Tooltip title="Download list of scholars in .json format">
									<Button
										sx={{ m: 1, minWidth: '200px' }}
										onClick={() => {
											handleJSONDownload(localData);
										}}
										startIcon={<DownloadIcon />}
										variant="outlined"
									>
										Download list
									</Button>
								</Tooltip>
								<Tooltip title="Upload list of scholars">
									<label htmlFor="upload-button">
										<Input
											onChange={handleJSONUpload}
											accept="application/JSON"
											id="upload-button"
											type="file"
										/>
										<Button
											component="span"
											startIcon={<UploadIcon />}
											variant="outlined"
											sx={{ m: 1, minWidth: '200px' }}
										>
											Upload List
										</Button>
									</label>
								</Tooltip>
								<CSVLink
									filename={'scholars.csv'}
									data={cleanData(sortedData)}
									style={{ textDecoration: 'none' }}
								>
									<ExportCSVButton />
								</CSVLink>
							</Box>
						</>
					)}
				</>
			)}
			{addresses.length === 0 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<img src={axie} alt="axie" style={{ height: '150px', margin: '32px' }} />
					<Typography sx={{ mb: 10 }} color="text.secondary">
						No scholars added
					</Typography>
					<Tooltip title="Upload list of scholars">
						<label htmlFor="upload-button">
							<Input
								onChange={handleJSONUpload}
								accept="application/JSON"
								id="upload-button"
								type="file"
							/>
							<Button
								onClick={null}
								component="span"
								startIcon={<UploadIcon />}
								variant="outlined"
								sx={{ m: 1 }}
								disableElevation
							>
								Upload list
							</Button>
						</label>
					</Tooltip>
				</Box>
			)}
		</>
	);
}

export default HomePage;

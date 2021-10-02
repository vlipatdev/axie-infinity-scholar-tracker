import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import FileSaver from 'file-saver';

import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';

import BasicCard from './BasicCard';
import Form from './Form';
import DataTable from './DataTable';
import ExportButton from './ExportButton';
import SortSelect from './SortSelect';
import SortTypeSelect from './SortTypeSelect';
import Footer from './Footer';
import Header from './Header';

import axie from '../assets/images/axie.png';
import slpLogo from '../assets/images/slp_logo.png';
import ethereumLogo from '../assets/images/ethereum_logo.png';
import axsLogo from '../assets/images/axs_logo.png';

import theme from '../theme';

import {
	calculateAverageSlp,
	calculateLastClaimInDays,
	processDate,
	calculateNextClaimInDays,
	calculateManagerShare,
	calculateScholarShare,
	calculateTotal,
	calculateScholarPercent,
	sortArray,
	addCommaToNumber,
} from '../helpers';

const Input = styled('input')({
	display: 'none',
});

function App() {
	const [addresses, setAddresses] = useState([]);
	const [data, setData] = useState([]);
	const [localData, setLocalData] = useState([]);
	const [localSettings, setLocalSettings] = useState({ sort_by: 'name', sort_type: 'ascending' });
	const [cryptoData, setCryptoData] = useState({
		'smooth-love-potion': {
			php: 0,
			php_24h_change: 0,
			usd: 0,
			usd_24h_change: 0,
		},
		ethereum: {
			php: 0,
			php_24h_change: 0,
			usd: 0,
			usd_24h_change: 0,
		},
		'axie-infinity': {
			php: 0,
			php_24h_change: 0,
			usd: 0,
			usd_24h_change: 0,
		},
	});
	const [isDelete, setIsDelete] = useState(false);
	const [currency] = useState('php');

	let sortedData;
	if (localSettings.sort_type === 'ascending') {
		sortedData = sortArray(data, localSettings.sort_by);
	} else {
		sortedData = sortArray(data, localSettings.sort_by).reverse();
	}

	useEffect(() => {
		const localStorageData = JSON.parse(localStorage.getItem('scholars'));
		if (localStorageData) {
			setAddresses(localStorageData.map((item) => item.ronin_address));
			setLocalData(localStorageData);
		}

		const localStorageSettings = JSON.parse(localStorage.getItem('settings'));
		if (localStorageSettings) {
			setLocalSettings(localStorageSettings);
		}

		// fetch crypto prices
		axios
			.get(
				'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Caxie-infinity%2Csmooth-love-potion&vs_currencies=php%2Cusd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false'
			)
			.then((response) => {
				setCryptoData(response.data);
			})
			.catch((error) => {
				alert('Error fetching crypto data. Please try again later.');
			});

		// console.log('useEffect get local storage');
	}, []);

	useEffect(() => {
		setAddresses(localData.map((item) => item.ronin_address));
		localStorage.setItem('scholars', JSON.stringify(localData));

		// console.log('useEffect update local data');
	}, [localData]);

	useEffect(() => {
		localStorage.setItem('settings', JSON.stringify(localSettings));
		// console.log('useEffect update local settings');
	}, [localSettings]);

	useEffect(() => {
		if (addresses.length !== 0) {
			if (!isDelete) {
				// fetch slp data
				axios
					.get(`https://game-api.axie.technology/api/v1/${addresses.join('%2C')}`)
					.then((response) => {
						let dataArray;
						if (addresses.length === 1) {
							dataArray = [response.data];
						} else {
							dataArray = Object.values(response.data);
						}

						const finalData = dataArray.map((dataItem, index) => {
							return {
								last_updated: processDate(dataItem.cache_last_updated),
								name: localData[index].name,
								ronin_address: localData[index].ronin_address,
								average_slp: calculateAverageSlp(
									dataItem.in_game_slp,
									calculateLastClaimInDays(dataItem.last_claim)
								),
								unclaimed_slp: dataItem.in_game_slp,
								claimed_slp: dataItem.total_slp - dataItem.in_game_slp,
								total_slp: dataItem.total_slp,
								last_claim_in_days: calculateLastClaimInDays(dataItem.last_claim),
								last_claim_date: processDate(parseInt(`${dataItem.last_claim}000`)),
								last_claim_raw: parseInt(`${dataItem.last_claim}000`),
								next_claim_in_days: calculateNextClaimInDays(dataItem.next_claim),
								next_claim_date: processDate(parseInt(`${dataItem.next_claim}000`)),
								next_claim_raw: dataItem.next_claim,
								manager_percent: parseInt(localData[index].manager_share),
								scholar_percent: calculateScholarPercent(localData[index].manager_share),
								manager_share: calculateManagerShare(
									dataItem.total_slp,
									localData[index].manager_share
								),
								scholar_share: calculateScholarShare(
									dataItem.total_slp,
									calculateScholarPercent(localData[index].manager_share)
								),
								mmr: dataItem.mmr,
								rank: dataItem.rank,
							};
						});
						setData(finalData);
					})
					.catch((error) => {
						alert('Could not connect to server. Please try again later.');
					});
			} else {
				setData(data.filter((dataItem) => addresses.includes(dataItem.ronin_address)));
			}
		} else {
			document.body.style.cursor = 'default';
			setData([]);
		}

		// console.log('useEffect update addresses');
		// eslint-disable-next-line
	}, [addresses]);

	function handleUpdate(data, isDelete) {
		setLocalData(data);
		setIsDelete(isDelete);
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
				setIsDelete(false);
				const JSONdata = JSON.parse(event.target.result);
				// simple JSON validation
				if (JSONdata[0].name && JSONdata[0].ronin_address && JSONdata[0].manager_share) {
					if (JSONdata.length > 100) {
						alert('Only JSON files with max 100 ronin addresses are allowed at the moment.');
					} else {
						setLocalData(JSONdata);
					}
					// JSON from https://axie-scho-tracker.xyz/
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
		<Box sx={{ flexGrow: 1 }}>
			{/* <NavBar /> */}
			<Header />
			<Container maxWidth="lg" sx={{ mb: 10 }}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						mb: 6,
					}}
				>
					<Tooltip title="View on CoinGecko">
						<a
							href={`https://www.coingecko.com/en/coins/ethereum/${currency}`}
							target="blank"
							rel="noreferrer"
							style={{ textDecoration: 'none', color: '#000000' }}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									m: 1,
									// minWidth: '200px',
								}}
							>
								<img
									src={ethereumLogo}
									style={{ height: '20px', width: '20px', marginRight: '4px' }}
									alt="ethereum logo"
								/>
								<Typography
									sx={{
										mr: 1,
										fontSize: 14,
										fontWeight: 'bold',
										[theme.breakpoints.down('md')]: {
											fontSize: 12,
										},
									}}
								>
									{addCommaToNumber(cryptoData.ethereum[currency])} {currency.toUpperCase()}
								</Typography>
								<Box
									sx={{
										borderRadius: '100px',
										backgroundColor:
											cryptoData.ethereum[`${currency}_24h_change`] >= 0 ? '#6cc000' : '#ff5341', // hardcoded
									}}
								>
									<Typography
										sx={{
											color: '#FFFFFF',
											fontSize: 12,
											[theme.breakpoints.down('md')]: {
												fontSize: 10,
											},
											ml: 1,
											mr: 1,
										}}
									>
										{cryptoData.ethereum[`${currency}_24h_change`] > 0 ? '+' : null}
										{cryptoData.ethereum[`${currency}_24h_change`].toFixed(2)}%
									</Typography>
								</Box>
							</Box>
						</a>
					</Tooltip>
					<Tooltip title="View on CoinGecko">
						<a
							href={`https://www.coingecko.com/en/coins/axie-infinity/${currency}`}
							target="blank"
							rel="noreferrer"
							style={{ textDecoration: 'none', color: '#000000' }}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									m: 1,
									// minWidth: '200px',
								}}
							>
								<img
									src={axsLogo}
									style={{ height: '20px', width: '20px', marginRight: '4px' }}
									alt="axs logo"
								/>
								<Typography
									sx={{
										mr: 1,
										fontWeight: 'bold',
										fontSize: 14,
										[theme.breakpoints.down('md')]: {
											fontSize: 12,
										},
									}}
								>
									{addCommaToNumber(cryptoData['axie-infinity'][currency])} {currency.toUpperCase()}
								</Typography>
								<Box
									sx={{
										borderRadius: '100px',
										backgroundColor:
											cryptoData['axie-infinity'][`${currency}_24h_change`] >= 0
												? '#6cc000'
												: '#ff5341',
									}}
								>
									<Typography
										sx={{
											color: '#FFFFFF',
											fontSize: 12,
											[theme.breakpoints.down('md')]: {
												fontSize: 10,
											},
											ml: 1,
											mr: 1,
										}}
									>
										{cryptoData['axie-infinity'][`${currency}_24h_change`] > 0 ? '+' : null}
										{cryptoData['axie-infinity'][`${currency}_24h_change`].toFixed(2)}%
									</Typography>
								</Box>
							</Box>
						</a>
					</Tooltip>
					<Tooltip title="View on CoinGecko">
						<a
							href={`https://www.coingecko.com/en/coins/smooth-love-potion/${currency}`}
							target="blank"
							rel="noreferrer"
							style={{ textDecoration: 'none', color: '#000000' }}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									m: 1,
									// minWidth: '200px',
								}}
							>
								<img
									src={slpLogo}
									style={{ height: '20px', width: '20px', marginRight: '4px' }}
									alt="slp logo"
								/>
								<Typography
									sx={{
										mr: 1,
										fontSize: 14,
										[theme.breakpoints.down('md')]: {
											fontSize: 12,
										},
										fontWeight: 'bold',
									}}
								>
									{cryptoData['smooth-love-potion'][currency]} {currency.toUpperCase()}
								</Typography>
								<Box
									sx={{
										borderRadius: '100px',
										backgroundColor:
											cryptoData['smooth-love-potion'][`${currency}_24h_change`] >= 0
												? '#6cc000'
												: '#ff5341',
									}}
								>
									<Typography
										sx={{
											color: '#FFFFFF',
											fontSize: 12,
											[theme.breakpoints.down('md')]: {
												fontSize: 10,
											},
											ml: 1,
											mr: 1,
										}}
									>
										{cryptoData['smooth-love-potion'][`${currency}_24h_change`] > 0 ? '+' : null}
										{cryptoData['smooth-love-potion'][`${currency}_24h_change`].toFixed(2)}%
									</Typography>
								</Box>
							</Box>
						</a>
					</Tooltip>
				</Box>
				{/* <Alert icon={false} severity="info" sx={{ m: 1, mb: 4 }}>
					🚧 This site is currently in alpha.{' '}
					<a
						style={{ color: '#1976D2' }}
						href="mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject=Axie Scholar Tracker Bug"
					>
						Click here to report errors or bugs.
					</a>
				</Alert> */}
				<Grid
					container
					spacing={2}
					sx={{
						mb: 6,
					}}
				>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Total Average"
							slp={calculateTotal(data, 'average_slp')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Total Unclaimed"
							slp={calculateTotal(data, 'unclaimed_slp')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Total Claimed"
							slp={calculateTotal(data, 'claimed_slp')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Total Farmed"
							slp={calculateTotal(data, 'total_slp')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Manager Total"
							slp={calculateTotal(data, 'manager_share')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
					<Grid item xs={6} sm={4} lg={2}>
						<BasicCard
							label="Scholar Total"
							slp={calculateTotal(data, 'scholar_share')}
							slpPrice={cryptoData['smooth-love-potion'][currency]}
							currency={currency}
						/>
					</Grid>
				</Grid>
				<Form localData={localData} onUpdate={handleUpdate} scholars={addresses.length} />
				{addresses.length !== 0 && (
					<>
						<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
							<Typography color="text.secondary">Sort by</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
								<SortSelect onUpdate={handleSortUpdate} localSettings={localSettings} />
								<SortTypeSelect onUpdate={handleSortUpdate} localSettings={localSettings} />
							</Box>
						</Box>
						<DataTable
							data={data}
							localData={localData}
							localSettings={localSettings}
							onDelete={handleUpdate}
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
								<label htmlFor="contained-button-file">
									<Input
										onChange={handleJSONUpload}
										accept="application/JSON"
										id="contained-button-file"
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
								<ExportButton />
							</CSVLink>
						</Box>
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
						<Typography sx={{ mb: 10 }}>No scholars added</Typography>
						<Tooltip title="Upload list of scholars">
							<label htmlFor="contained-button-file">
								<Input
									onChange={handleJSONUpload}
									accept="application/JSON"
									id="contained-button-file"
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
			</Container>
			<Footer />
		</Box>
	);
}

export default App;

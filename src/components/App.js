import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import FileSaver from 'file-saver';

import '../styles/App.css';

import NavBar from './NavBar';
import BasicCard from './BasicCard';
import Form from './Form';
import DataTable from './DataTable';
import ExportButton from './ExportButton';
import BasicSelect from './BasicSelect';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';

import axie from '../assets/images/axie.png';
import profile from '../assets/images/profile.png';

import {
	calculateAverageSlp,
	calculateLastClaimInDays,
	processDate,
	calculateNextClaimInDays,
	calculateManagerShare,
	calculateScholarShare,
	calculateTotal,
	calculateScholarPercent,
} from '../helpers';
import { Typography } from '@mui/material';

const Input = styled('input')({
	display: 'none',
});

function App() {
	const [addresses, setAddresses] = useState([]);
	const [data, setData] = useState([]);
	const [localData, setLocalData] = useState([]);
	const [slpPrice, setSlpPrice] = useState(0);

	const BASE_URL = 'https://game-api.axie.technology/api/v1/';

	// onload
	useEffect(() => {
		// get local storage data
		const localStorageData = JSON.parse(localStorage.getItem('profiles'));
		if (localStorageData) {
			setAddresses(localStorageData.map((item) => item.ronin_address));
			setLocalData(localStorageData);
		}

		console.log('useEffect get local storage');
	}, []);

	// local data
	useEffect(() => {
		// update addresess
		setAddresses(localData.map((item) => item.ronin_address));

		// update local storage
		localStorage.setItem('profiles', JSON.stringify(localData));

		console.log('useEffect update local data');
	}, [localData]);

	useEffect(() => {
		const finalUrl = BASE_URL + addresses.join('%2C');

		if (addresses.length !== 0) {
			// fetch slp data
			axios
				.get(finalUrl)
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
							next_claim_in_days: calculateNextClaimInDays(dataItem.next_claim),
							next_claim_date: processDate(parseInt(`${dataItem.next_claim}000`)),
							next_claim_date_raw: dataItem.next_claim,
							manager_percent: localData[index].manager_share,
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

			// fetch slp price
			axios
				.get(
					'https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false'
				)
				.then((response) => {
					setSlpPrice(response.data['smooth-love-potion'].php);
				})
				.catch((error) => {
					alert('Error fetching SLP price. Please try again later.');
				});
		} else {
			document.body.style.cursor = 'default';
			setData([]);
		}

		console.log('useEffect update addresses');
	}, [addresses]);

	function handleUpdate(data) {
		setLocalData(data);
	}

	function handleJSONDownload(data) {
		const fileName = 'scholars.json';
		const fileToSave = new Blob([JSON.stringify(data, null, 2)], {
			type: 'application/json',
		});

		FileSaver.saveAs(fileToSave, fileName);
	}

	function handleUpload(event) {
		const fileReader = new FileReader();
		if (event.target.files[0]) {
			fileReader.readAsText(event.target.files[0], 'UTF-8');
			fileReader.onload = (event) => {
				setLocalData(JSON.parse(event.target.result));
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

	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* <Box sx={{ minHeight: '40px', backgroundColor: '#ff9800' }}></Box> */}
			<NavBar />
			<Box
				sx={{
					height: '200px',
					backgroundColor: '#1976D2',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					mb: 4,
					backgroundImage: `url('https://www.transparenttextures.com/patterns/axiom-pattern.png')`,
				}}
			>
				<img src={axie} alt="axie logo" style={{ height: '75px', marginBottom: '16px' }} />

				{/* <Typography sx={{ color: '#ffffff', fontSize: 30 }}>Scholar Tracker</Typography> */}
			</Box>
			<Container maxWidth="lg">
				<Alert icon={false} severity="info" sx={{ margin: 1, mb: 4 }}>
					🚧 This site is under development.{' '}
					<a
						style={{ color: '#1976D2' }}
						href="mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject=Axie Scholar Tracker Bug"
					>
						Click here to report bugs.
					</a>
				</Alert>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						mb: 4,
					}}
				>
					<BasicCard
						label="Total Unclaimed"
						slp={calculateTotal(data, 'unclaimed_slp')}
						slpPrice={slpPrice}
					/>
					<BasicCard
						label="Total Average"
						slp={calculateTotal(data, 'average_slp')}
						slpPrice={slpPrice}
					/>
					<BasicCard
						label="Total Claimed"
						slp={calculateTotal(data, 'claimed_slp')}
						slpPrice={slpPrice}
					/>
					<BasicCard
						label="Total Farmed"
						slp={calculateTotal(data, 'total_slp')}
						slpPrice={slpPrice}
					/>
					<BasicCard
						label="Manager's Total"
						slp={calculateTotal(data, 'manager_share')}
						slpPrice={slpPrice}
					/>
					<BasicCard
						label="Scholar's Total"
						slp={calculateTotal(data, 'scholar_share')}
						slpPrice={slpPrice}
					/>
				</Box>
				<Form localData={localData} onUpdate={handleUpdate} />
				{/* <Box sx={{ display: 'flex' }}>
					<BasicSelect />
					<BasicSelect />
				</Box> */}
				<DataTable data={data} localData={localData} onDelete={handleUpdate} slpPrice={slpPrice} />
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						sx={{ margin: 1 }}
						onClick={() => {
							handleJSONDownload(localData);
						}}
						startIcon={<DownloadIcon />}
						variant="outlined"
					>
						Export JSON
					</Button>
					<label htmlFor="contained-button-file">
						<Input
							onChange={handleUpload}
							accept="application/JSON"
							id="contained-button-file"
							type="file"
						/>
						<Button
							onClick={null}
							component="span"
							startIcon={<UploadIcon />}
							variant="outlined"
							sx={{ margin: 1 }}
						>
							Import JSON
						</Button>
					</label>
					<CSVLink
						filename={'scholars.csv'}
						data={cleanData(data)}
						style={{ textDecoration: 'none' }}
					>
						<ExportButton />
					</CSVLink>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, mb: 5 }}>
					<Avatar src={profile} sx={{ margin: 2, height: 40, width: 40 }} />
					<Typography sx={{ fontSize: 14 }}>
						by{' '}
						<a
							style={{ textDecoration: 'none', color: '#1976D2' }}
							href="https://github.com/vlipatdev"
						>
							vlipatdev
						</a>{' '}
						with ❤️
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}

export default App;

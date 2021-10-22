import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { addCommaToNumber } from '../utils';

import axsLogo from '../images/axs_logo.png';
import ethereumLogo from '../images/ethereum_logo.png';
import slpLogo from '../images/slp_logo.png';

import theme from '../theme';

function CryptoBar(props) {
	const { data, currency } = props;

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				mb: 2,
			}}
		>
			<Tooltip title="Ethereum">
				<a
					href={`https://www.coingecko.com/en/coins/ethereum/${currency}`}
					target="blank"
					rel="noreferrer"
					style={{
						textDecoration: 'none',
						color: theme.palette.mode === 'light' ? 'black' : 'white',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							m: 1,
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
							{addCommaToNumber(data.ethereum[currency])} {currency.toUpperCase()}
						</Typography>
						<Box
							sx={{
								borderRadius: '100px',
								backgroundColor:
									data.ethereum[`${currency}_24h_change`] >= 0 ? '#6cc000' : '#ff5341',
							}}
						>
							<Typography
								sx={{
									color: 'white',
									fontSize: 12,
									[theme.breakpoints.down('md')]: {
										fontSize: 10,
									},
									ml: 1,
									mr: 1,
								}}
							>
								{data.ethereum[`${currency}_24h_change`] > 0 ? '+' : null}
								{data.ethereum[`${currency}_24h_change`].toFixed(2)}%
							</Typography>
						</Box>
					</Box>
				</a>
			</Tooltip>
			<Tooltip title="Axie Infinity">
				<a
					href={`https://www.coingecko.com/en/coins/axie-infinity/${currency}`}
					target="blank"
					rel="noreferrer"
					style={{
						textDecoration: 'none',
						color: theme.palette.mode === 'light' ? 'black' : 'white',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							m: 1,
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
							{addCommaToNumber(data['axie-infinity'][currency])} {currency.toUpperCase()}
						</Typography>
						<Box
							sx={{
								borderRadius: '100px',
								backgroundColor:
									data['axie-infinity'][`${currency}_24h_change`] >= 0 ? '#6cc000' : '#ff5341',
							}}
						>
							<Typography
								sx={{
									color: 'white',
									fontSize: 12,
									[theme.breakpoints.down('md')]: {
										fontSize: 10,
									},
									ml: 1,
									mr: 1,
								}}
							>
								{data['axie-infinity'][`${currency}_24h_change`] > 0 ? '+' : null}
								{data['axie-infinity'][`${currency}_24h_change`].toFixed(2)}%
							</Typography>
						</Box>
					</Box>
				</a>
			</Tooltip>
			<Tooltip title="Smooth Love Potion">
				<a
					href={`https://www.coingecko.com/en/coins/smooth-love-potion/${currency}`}
					target="blank"
					rel="noreferrer"
					style={{
						textDecoration: 'none',
						color: theme.palette.mode === 'light' ? 'black' : 'white',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							m: 1,
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
							{data['smooth-love-potion'][currency]} {currency.toUpperCase()}
						</Typography>
						<Box
							sx={{
								borderRadius: '100px',
								backgroundColor:
									data['smooth-love-potion'][`${currency}_24h_change`] >= 0 ? '#6cc000' : '#ff5341',
							}}
						>
							<Typography
								sx={{
									color: 'white',
									fontSize: 12,
									[theme.breakpoints.down('md')]: {
										fontSize: 10,
									},
									ml: 1,
									mr: 1,
								}}
							>
								{data['smooth-love-potion'][`${currency}_24h_change`] > 0 ? '+' : null}
								{data['smooth-love-potion'][`${currency}_24h_change`].toFixed(2)}%
							</Typography>
						</Box>
					</Box>
				</a>
			</Tooltip>
		</Box>
	);
}

export default CryptoBar;

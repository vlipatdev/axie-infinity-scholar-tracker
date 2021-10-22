import axios from 'axios';
import {
	calcAverageSlp,
	calcLastClaimInDays,
	calcManagerShare,
	calcNextClaimInDays,
	calcScholarPercent,
	calcScholarShare,
	formatDate,
} from './utils';

export const fetchScholarData = (localData, addresses) => {
	const promise = new Promise((resolve, reject) => {
		axios
			.get(`https://game-api.axie.technology/api/v1/${addresses.join('%2C')}`)
			.then((response) => {
				let dataArray;
				if (addresses.length === 1) {
					dataArray = [response.data];
				} else {
					// convert data object to array
					dataArray = Object.values(response.data);
				}

				const finalData = dataArray.map((item, index) => {
					return {
						last_updated: formatDate(item.cache_last_updated),
						name: localData[index].name,
						ronin_address: localData[index].ronin_address,
						average_slp: calcAverageSlp(item.in_game_slp, calcLastClaimInDays(item.last_claim)),
						unclaimed_slp: item.in_game_slp,
						claimed_slp: item.total_slp - item.in_game_slp,
						total_slp: item.total_slp,
						last_claim_in_days: calcLastClaimInDays(item.last_claim),
						last_claim_date: formatDate(parseInt(`${item.last_claim}000`)),
						last_claim_raw: parseInt(`${item.last_claim}000`),
						next_claim_in_days: calcNextClaimInDays(item.next_claim),
						next_claim_date: formatDate(parseInt(`${item.next_claim}000`)),
						next_claim_raw: item.next_claim,
						manager_percent: parseInt(localData[index].manager_share),
						scholar_percent: calcScholarPercent(localData[index].manager_share),
						manager_share: calcManagerShare(item.total_slp, localData[index].manager_share),
						scholar_share: calcScholarShare(
							item.total_slp,
							calcScholarPercent(localData[index].manager_share)
						),
						manager_share_unclaimed: calcManagerShare(
							item.in_game_slp,
							localData[index].manager_share
						),
						scholar_share_unclaimed: calcScholarShare(
							item.in_game_slp,
							calcScholarPercent(localData[index].manager_share)
						),
						mmr: item.mmr,
						rank: item.rank,
					};
				});
				resolve(finalData);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};

export const fetchCryptoData = (currency) => {
	const promise = new Promise((resolve, reject) => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Caxie-infinity%2Csmooth-love-potion&vs_currencies=${currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false`
			)
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});

	return promise;
};

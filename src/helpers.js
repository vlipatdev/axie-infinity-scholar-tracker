export const numberWithCommas = (number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const processDate = (dateInMilliseconds) => {
	return new Date(dateInMilliseconds).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
};

export const calculateAverageSlp = (inGameSlp, lastClaimInDays) => {
	return (inGameSlp / lastClaimInDays).toFixed(0);
};

export const calculateLastClaimInDays = (lastClaim) => {
	return Math.ceil((Date.now() - parseInt(`${lastClaim}000`)) / 86400000);
};

export const calculateNextClaimInDays = (nextClaim) => {
	return Math.floor((parseInt(`${nextClaim}000`) - Date.now()) / 86400000);
};

export const calculateTotal = (array, property) => {
	let sum = 0;

	array.forEach((item) => {
		sum += parseInt(item[property]);
	});

	return sum;
};

export const lastClaimInDays = (days) => {
	if (days === 1) {
		return `${days} day ago`;
	} else {
		return `${days} days ago`;
	}
};

export const nextClaimInDays = (days) => {
	if (days < 0) {
		return `${Math.abs(days)} days ago`;
	} else {
		if (days === 1) {
			return `in ${days} day`;
		} else {
			return `in ${days} days`;
		}
	}
};

export const calculateScholarPercent = (managerPercent) => {
	return 100 - managerPercent;
};

export const calculateManagerShare = (totalSlp, managerPercent) => {
	return (totalSlp * (managerPercent / 100)).toFixed(0);
};

export const calculateScholarShare = (totalSlp, scholarPercent) => {
	return (totalSlp * (scholarPercent / 100)).toFixed(0);
};

export const limitString = (string) => {
	if (string.length > 10) {
		return `${string.substring(0, 10)}...`;
	} else {
		return string;
	}
};

// const sampleLocalStorageArray = [
// 	{
// 		name: 1,
// 		ronin_address: 'ronin:26d252724d08a30151ab5c87bd6b4fb5eadb1500',
// 		manager_share: 40,
// 	},
// 	{
// 		name: 2,
// 		ronin_address: 'ronin:94cd705c143a1e356e6f0b12876746853e08b438',
// 		manager_share: 40,
// 	},
// 	{
// 		name: 3,
// 		ronin_address: 'ronin:66371edb29c61c9601400da9c30f443e04867fe1',
// 		manager_share: 40,
// 	},
// ];

// localStorage.setItem('profiles', JSON.stringify(sampleLocalStorageArray));

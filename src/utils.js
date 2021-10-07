export const addCommaToNumber = (number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const addDaysAgo = (days) => {
	if (days === 1) {
		return `${days} day ago`;
	} else {
		return `${days} days ago`;
	}
};

export const calcAverageSlp = (inGameSlp, lastClaimInDays) => {
	return parseInt((inGameSlp / lastClaimInDays).toFixed(0));
};

export const calcLastClaimInDays = (lastClaim) => {
	return Math.ceil((Date.now() - parseInt(`${lastClaim}000`)) / 86400000);
};

export const calcManagerShare = (totalSlp, managerPercent) => {
	return parseInt((totalSlp * (managerPercent / 100)).toFixed(0));
};

export const calcNextClaimInDays = (nextClaim) => {
	return Math.floor((parseInt(`${nextClaim}000`) - Date.now()) / 86400000);
};

export const calcScholarPercent = (managerPercent) => {
	return 100 - managerPercent;
};

export const calcScholarShare = (totalSlp, scholarPercent) => {
	return parseInt((totalSlp * (scholarPercent / 100)).toFixed(0));
};

export const calcTotal = (array, property) => {
	let sum = 0;
	array.forEach((item) => {
		sum += parseInt(item[property]);
	});
	return sum;
};

export const formatDate = (dateInMilliseconds) => {
	return new Date(dateInMilliseconds).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
};

export const limitString = (string) => {
	if (string.length > 10) {
		return `${string.substring(0, 10)}...`;
	} else {
		return string;
	}
};

export const sortArray = (array, sortBy) => {
	// https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
	const compare = (a, b) => {
		return a[sortBy].toString().localeCompare(b[sortBy].toString(), undefined, {
			numeric: true,
			sensitivity: 'base',
		});
	};
	return array.sort(compare);
};

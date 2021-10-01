export const addCommaToNumber = (number) => {
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
	return parseInt((inGameSlp / lastClaimInDays).toFixed(0));
};

export const calculateLastClaimInDays = (lastClaim) => {
	return Math.ceil((Date.now() - parseInt(`${lastClaim}000`)) / 86400000);
};

export const addDaysAgoText = (days) => {
	if (days === 1) {
		return `${days} day ago`;
	} else {
		return `${days} days ago`;
	}
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

export const calculateScholarPercent = (managerPercent) => {
	return 100 - managerPercent;
};

export const calculateManagerShare = (totalSlp, managerPercent) => {
	return parseInt((totalSlp * (managerPercent / 100)).toFixed(0));
};

export const calculateScholarShare = (totalSlp, scholarPercent) => {
	return parseInt((totalSlp * (scholarPercent / 100)).toFixed(0));
};

export const limitString = (string) => {
	if (string.length > 10) {
		return `${string.substring(0, 10)}...`;
	} else {
		return string;
	}
};

export const sortArray = (array, sortBy) => {
	const compare = (a, b) => {
		// https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
		return a[sortBy].toString().localeCompare(b[sortBy].toString(), undefined, {
			numeric: true,
			sensitivity: 'base',
		});
	};
	return array.sort(compare);
};

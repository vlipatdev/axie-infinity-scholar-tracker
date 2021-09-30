export const addCommasToNumber = (number) => {
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
	// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
	const compare = (a, b) => {
		if (sortBy === 'name') {
			if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
				return -1;
			}
			if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
				return 1;
			}
		} else {
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
		}
		return 0;
	};
	return array.sort(compare);
};

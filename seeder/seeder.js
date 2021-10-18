const number = 100;

function generateRoninAddresses() {
	let roninAddresses = [];
	for (let i = 1; i <= number; i++) {
		const baseAddress = 'ronin:0000000000000000000000000000000000000000';
		roninAddresses.push(
			`${baseAddress.substring(0, baseAddress.length - i.toString().length)}${i}`
		);
	}
	return roninAddresses;
}

function generateNames() {
	let names = [];
	for (let i = 1; i <= number; i++) {
		names.push(i.toString());
	}
	return names;
}

const names = generateNames();
const roninAddresses = generateRoninAddresses();

function generateProfiles() {
	const profiles = [];
	names.forEach((name, idx) => {
		profiles.push({
			name: name,
			ronin_address: roninAddresses[idx],
			manager_share: '50',
		});
	});
	console.log(JSON.stringify(profiles));
}

generateProfiles();

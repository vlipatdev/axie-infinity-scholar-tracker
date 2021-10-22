import React, { useEffect, useState } from 'react';

export const LocalDataContext = React.createContext();

export const LocalDataProvider = ({ children }) => {
	const [localData, setLocalData] = useState([]);

	useEffect(() => {
		const localStorageData = JSON.parse(localStorage.getItem('scholars'));
		if (localStorageData) {
			setLocalData(localStorageData);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('scholars', JSON.stringify(localData));
	}, [localData]);

	return (
		<LocalDataContext.Provider value={{ localData, setLocalData }}>
			{children}
		</LocalDataContext.Provider>
	);
};

import React, { useState } from 'react';

export const FromDeleteContext = React.createContext();

export const FromDeleteProvider = ({ children }) => {
	const [fromDelete, setFromDelete] = useState(false);

	return (
		<FromDeleteContext.Provider value={{ fromDelete, setFromDelete }}>
			{children}
		</FromDeleteContext.Provider>
	);
};

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { LocalDataProvider } from './contexts/LocalDataContext';
import { FromDeleteProvider } from './contexts/FromDeleteContext';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<LocalDataProvider>
			<FromDeleteProvider>
				<CssBaseline />
				<HashRouter>
					<App />
				</HashRouter>
			</FromDeleteProvider>
		</LocalDataProvider>
	</ThemeProvider>,
	document.getElementById('root')
);

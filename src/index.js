import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<HashRouter>
			<App />
		</HashRouter>
		,
	</ThemeProvider>,
	document.getElementById('root')
);

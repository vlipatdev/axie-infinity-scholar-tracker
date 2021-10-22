import { Switch, Route, Redirect } from 'react-router-dom';

import Container from '@mui/material/Container';

import Header from './templates/Header';

import HomePage from './pages/HomePage';
import ScholarPage from './pages/ScholarPage';

function App() {
	return (
		<main>
			<Header />
			<Container maxWidth="lg" sx={{ mb: 10 }}>
				<Switch>
					<Route path="/scholar/:name" component={ScholarPage} />
					<Route exact path="/" component={HomePage} />
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</Container>
		</main>
	);
}

export default App;

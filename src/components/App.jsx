import styles from '../components/app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import ContactsConatiner from './ContactsContainer';
import { Tab, Tabs } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, matchPath, useLocation } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Registration from './Registration';
import Login from './Login';
import { useGetUserQuery } from '../redux/loginApi';


function Router(props) {
	const { children } = props;
	if (typeof window === 'undefined') {
		return <StaticRouter location="/drafts">{children}</StaticRouter>;
	}

	return (
		<MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
			{children}
		</MemoryRouter>
	);
}

Router.propTypes = {
	children: PropTypes.node,
};

function useRouteMatch(patterns) {
	const { pathname } = useLocation();

	for (let i = 0; i < patterns.length; i += 1) {
		const pattern = patterns[i];
		const possibleMatch = matchPath(pattern, pathname);
		if (possibleMatch !== null) {
			return possibleMatch;
		}
	}

	return null;
}

function MyTabs() {
	const routeMatch = useRouteMatch(['/contacts', '/login', '/register']);
	const currentTab = routeMatch?.pattern?.path;

	return (
		<Tabs value={currentTab}>
			<Tab label="Contacts" value="/contacts" to="/contacts" component={Link} />
			<Tab label="Login" value="/login" to="/login" component={Link} />
			<Tab
				label="Registration"
				value="/register"
				to="/register"
				component={Link}
			/>
		</Tabs>
	);
}

const App = () => {
	useGetUserQuery();

	return (
		<div className={styles.app}>
			<MyTabs />

			<Routes>
				<Route path="/contacts" element={<ContactsConatiner />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Registration />} />
				<Route path="*" element={<Registration />} />
			</Routes>
		</div>
	);
};

export default App;

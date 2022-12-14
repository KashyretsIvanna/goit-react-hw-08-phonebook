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
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../redux/loginApi';
import { SyncLoader } from 'react-spinners';
import { useGetContactsQuery } from '../redux/rtk';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';
import Home from './Home';
import { Suspense } from 'react';

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
	let user = useSelector(state => state.user);
	const routeMatch = useRouteMatch(['/contacts', '/login', '/register']);
	const currentTab = routeMatch?.pattern?.path;

	return (
		<Tabs value={currentTab}>
			{user.name && (
				<Tab
					label="Contacts"
					value="/contacts"
					to="/contacts"
					component={Link}
				/>
			)}
			{!user.name && (
				<Tab
					label="Registration"
					value="/register"
					to="/register"
					component={Link}
				/>
			)}
			{!user.name && (
				<Tab label="Login" value="/login" to="/login" component={Link} />
			)}
		</Tabs>
	);
}

const App = () => {
	const { isLoading } = useGetUserQuery();

	const params = useGetContactsQuery();

	return (
		<div className={styles.app}>
			<MyTabs />
			{!isLoading && !params.isLoading ? (
				<Suspense fallback={<SyncLoader />}>
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="contacts" element={<PrivateRoute />}>
								<Route
									path="/contacts"
									element={<ContactsConatiner data={params.data} />}
								/>
							</Route>

							<Route path="/" element={<PublicRoutes restricted />}>
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Registration />} />
							</Route>
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Suspense>
			) : (
				<SyncLoader />
			)}
		</div>
	);
};

export default App;

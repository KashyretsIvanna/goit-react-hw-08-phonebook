import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { useLogOutMutation ,useGetUserQuery} from 'redux/loginApi';
import { useSelector } from 'react-redux';

const UserMenu = () => {
	const [logOut] = useLogOutMutation();
	let tok= useSelector(state => state.contacts.token);

	const data=useGetUserQuery(tok)
	console.log(data)

	let { email, token } = useSelector(state => state.user);

	const handleLogOut = () => {
		logOut(token);
	};
	return (
		<Fragment>
			{email && (
				<>
					<p>{email}</p>
					<Button
						onClick={() => {
							handleLogOut();
						}}
					>
						Log out
					</Button>
				</>
			)}
		</Fragment>
	);
};

export default UserMenu;

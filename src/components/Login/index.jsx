import { Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import styles from '../Login/index.module.css';
import { useSignUpMutation } from 'redux/loginApi';
import { useState } from 'react';

const LogIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signUp, status] = useSignUpMutation();
	console.log(status);

	const handleSubmit = () => {
		signUp({
			email: email,
			password: password,
		});
		setEmail('');
		setPassword('');
	};

	return (
		<Fragment>
			<FormGroup onSubmit={handleSubmit} className={styles.form_body}>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input
					onChange={e => {
						setEmail(e.target.value);
					}}
					value={email}
					id="my-input"
					aria-describedby="my-helper-text"
				/>
				<InputLabel htmlFor="my-password">Password</InputLabel>
				<Input
					onChange={e => {
						setPassword(e.target.value);
					}}
					value={password}
					id="my-password"
				/>
				<Button variant="contained" type="submit">
					Log in
				</Button>
			</FormGroup>
		</Fragment>
	);
};

export default LogIn;

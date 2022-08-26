import { Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from '../Login/index.module.css';
import {  useSignUpMutation } from 'redux/loginApi';
import { useState } from 'react';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [signUp, status] = useSignUpMutation();

	const handleSubmit = e => {
		e.preventDefault();
		let resp = {
			name:name,
			email: email,
			password: password,
		};
		console.log(resp);

		signUp(resp);
		console.log(status);
	};

	return (
		<Fragment>
			<form onSubmit={e => handleSubmit(e)} className={styles.form_body}>
				<InputLabel htmlFor="my-name">User name</InputLabel>
				<Input
					onChange={e => {
						setName(e.target.value);
					}}
					value={name}
					id="my-name"
					aria-describedby="my-helper-text"
				/>
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
				<br />
				<Button variant="contained" type="submit">
					Log in
				</Button>
			</form>
		</Fragment>
	);
};

export default Registration;

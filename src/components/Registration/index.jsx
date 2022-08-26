import { Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import styles from '../Login/index.module.css';

const Registration = () => {
	return (
		<Fragment>
			<FormGroup className={styles.form_body}>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" />
				<InputLabel htmlFor="my-password">Password</InputLabel>
				<Input id="my-password" />
				<Button variant="contained" type="submit">
					Log in
				</Button>
			</FormGroup>
		</Fragment>
	);
};

export default Registration;

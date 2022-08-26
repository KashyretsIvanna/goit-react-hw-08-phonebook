import { Fragment } from 'react';
import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import styles from '../ContactsContainer/index.module.css';

const ContactsConatiner = () => {
	const token = useSelector(state => state.contacts.token);
	return (
		<>
			{token && (
				<Fragment>
					<div className={styles.body}>
						<div className={styles.left}>
							<UserMenu />
							<h2>Phonebook</h2>
							<Form />
						</div>
						<div className={styles.right}>
							<h2>Contacts</h2>
							<Filter />
							<Contacts />
						</div>
					</div>
				</Fragment>
			)}
		</>
	);
};

export default ContactsConatiner;

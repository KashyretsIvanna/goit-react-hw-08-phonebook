import { Fragment } from 'react';
import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';
import UserMenu from 'components/UserMenu';

const ContactsConatiner = () => {
	return (
		<Fragment>
			<UserMenu />
			<h2>Phonebook</h2>
			<Form />
			<h2>Contacts</h2>
			<Filter />
			<Contacts />
		</Fragment>
	);
};

export default ContactsConatiner;

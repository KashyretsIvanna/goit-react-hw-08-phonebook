import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';

const App = () => {
	return (
		<div className={styles.app}>
			<h2>Phonebook</h2>
			<Form />
			<h2>Contacts</h2>
			<Filter />
			<Contacts />
		</div>
	);
};

export default App;

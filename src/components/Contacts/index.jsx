import styles from '../Contacts/index.module.css';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/rtk';
import { SyncLoader } from 'react-spinners';

const Contacts = () => {
	const { data, isLoading } = useGetContactsQuery();

	console.log(data);
	const filter = useSelector(state => state.contacts.filter);
	const handleFilter = () => {
		return data.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);
	};

	return (
		<div>
			<ul className={styles.contacts}>
				{isLoading && <SyncLoader />}
				{data &&
					handleFilter().map(contact => {
						return (
							<Contact
								key={contact.id}
								number={contact.number}
								name={contact.name}
								id={contact.id}
							/>
						);
					})}
			</ul>
		</div>
	);
};

export default Contacts;

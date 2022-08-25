import { Fragment } from 'react';
import styles from '../Filter/index.module.css';
import * as actions from '../../redux/phonebook-actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Filter = () => {
	const filter = useSelector(state => state.contacts.filter);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<p className={styles.p}>Find contacts by name</p>
			<input
				className={styles.input}
				type="text"
				value={filter}
				onChange={e => {
					dispatch(actions.setFilter(e.target.value));
				}}
			/>
		</Fragment>
	);
};

export default Filter;

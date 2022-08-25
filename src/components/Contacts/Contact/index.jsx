import styles from './index.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/rtk';

const Contact = ({ id, number, name }) => {
	const [deleteContact] = useDeleteContactMutation();
	return (
		<li className={styles.li}>
			{name + ': ' + number}
			<button
				className={styles.button}
				onClick={() => {
					deleteContact(id);
				}}
			>
				Delete
			</button>
		</li>
	);
};

Contact.propTypes = {
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Contact;

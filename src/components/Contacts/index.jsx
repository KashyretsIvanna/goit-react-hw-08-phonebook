import styles from '../Contacts/index.module.css';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/rtk';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from 'components/Row';

export default function Contacts() {
	const { data } = useGetContactsQuery();

	const filter = useSelector(state => state.contacts.filter);
	const handleFilter = () => {
		return data.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);
	};

	return (
		<>
			{/* {isLoading && <SyncLoader />} */}
			{data && (
				<div className={styles.container}>
					<TableContainer sx={{ maxHeight: 440 }} component={Paper}>
						<Table
							stickyHeader
							sx={{ maxWidth: 450 }}
							aria-label="simple table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Contact name</TableCell>
									<TableCell align="right">Phone number</TableCell>

									<TableCell align="right">Delete</TableCell>
									<TableCell align="right">Update</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{handleFilter().map(row => (
									<Row key={row.id} row={row} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			)}
		</>
	);
}

import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button, Input } from '@mui/material';
import {
	useDeleteContactMutation,
	useUpdateContactsMutation,
} from '../../redux/rtk';
import { useState } from 'react';

const Row = ({ row }) => {
	const [updateContacts] = useUpdateContactsMutation();
	const [deleteContact, { isLoading }] = useDeleteContactMutation();
	const [name, setName] = useState(row.name);
	const [number, setNumber] = useState(row.number);

	const updateContact = () => {
		console.log({ id: row.id, data: { name, number } });
		updateContacts({ id: row.id, data: { name, number } });
	};

	return (
		<TableRow
			key={row.id}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell component="th" scope="row">
				<Input
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</TableCell>
			<TableCell align="right">
				<Input
					value={number}
					onChange={e => {
						setNumber(e.target.value);
					}}
				/>
			</TableCell>
			<TableCell align="right">
				<Button
					onClick={() => {
						deleteContact(row.id);
					}}
				>
					{isLoading ? 'Loading' : 'Delete'}
				</Button>
			</TableCell>
			<TableCell align="right">
				<Button
					onClick={() => {
						updateContact();
					}}
				>
					Update
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default Row;

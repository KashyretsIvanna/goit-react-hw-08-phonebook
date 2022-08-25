import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/phonebook-actions';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const filterReducer = createReducer('', {
	[actions.setFilter.type]: (_, act) => act.payload,
});

const rootPersistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['filter'],
};

const contactsReducer = combineReducers({
	filter: filterReducer,
});

const persistedContsctsReducer = persistReducer(
	rootPersistConfig,
	contactsReducer,
);

export default persistedContsctsReducer;

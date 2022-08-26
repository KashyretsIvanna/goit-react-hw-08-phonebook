import { createSlice } from '@reduxjs/toolkit';
import { loginReducer } from './loginApi';

const sliceUser = createSlice({
	name: 'user',
	initialState: {},
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(
			loginReducer.endpoints.logIn.matchFulfilled,
			(state, { payload }) => {
				console.log(state);
				state.email = payload.user.email;
				state.name = payload.user.name;
				state.token = payload.token;
			},
		);
		builder.addMatcher(
			loginReducer.endpoints.getUser.matchFulfilled,
			(state, { payload }) => {
				console.log(state);
				state.email = payload.email;
				state.name = payload.name;
			},
		);
		
		builder.addMatcher(
			loginReducer.endpoints.logOut.matchFulfilled,
			(state, { payload }) => {
				console.log(state);
				state.email = '';
				state.name = ' ';
				state.token = ' ';
			},
		);
	},
});

export default sliceUser.reducer;

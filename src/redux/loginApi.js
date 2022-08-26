import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const loginReducer = createApi({
	reducerPath: 'loginReducer',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com/users',
	}),
	endpoints: builder => ({
		signUp: builder.mutation({
			query(body) {
				return { url: `/signup`, method: 'POST', body };
			},
			invalidatesTags: ['Contact'],
		}),
	}),
});

export const { useSignUpMutation } = loginReducer;

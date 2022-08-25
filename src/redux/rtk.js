import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
	reducerPath: 'itemsReducer',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://63027e8a9eb72a839d7097b3.mockapi.io/',
	}),
	tagTypes: ['Contact'],

	endpoints: build => ({
		getContacts: build.query({
			query: () => `contacts/`,
			providesTags: ['Contact'],
		}),
		addContacts: build.mutation({
			query(body) {
				return { url: `contacts`, method: 'POST', body };
			},
			invalidatesTags: ['Contact'],
		}),
		deleteContact: build.mutation({
			query(id) {
				return {
					url: `contacts/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['Contact'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useAddContactsMutation,
	useDeleteContactMutation,
} = contactsApi;

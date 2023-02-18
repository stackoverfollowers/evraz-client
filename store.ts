import { configureStore } from '@reduxjs/toolkit';
import schemeReducer from './features/schemeSlice';
import { api } from './features/api';
import graphReducer from './features/graphSlice';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		scheme: schemeReducer,
		graph: graphReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

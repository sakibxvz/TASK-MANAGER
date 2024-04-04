import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/api/authSlice';
import { apiSlice } from './slices/api/apiSlice';

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

export default store;

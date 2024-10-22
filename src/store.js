import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import lanesReducer from './slices/laneSlice';
import { redditApi } from './api/redditApi';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, lanesReducer);

export const store = configureStore({
  reducer: {
    lanes: persistedReducer,
    [redditApi.reducerPath]: redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
});

export const persistor = persistStore(store);

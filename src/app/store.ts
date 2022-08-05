import { configureStore } from '@reduxjs/toolkit';
import burgerHandlerSlice from '../features/burgerHandler';

export const store = configureStore({
  reducer: {
    burgerHandler: burgerHandlerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

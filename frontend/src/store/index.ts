import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import emailReducer from './slices/emailSlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

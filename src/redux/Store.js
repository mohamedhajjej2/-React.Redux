import { configureStore } from '@reduxjs/toolkit'
import Todoslice from './todoslice/Todoslice';

export const store = configureStore({
  reducer: {
    todo: Todoslice,
  },
});
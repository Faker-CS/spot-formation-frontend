import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here (e.g., import counterReducer from './features/counter/counterSlice');
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
});
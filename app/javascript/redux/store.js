import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';

export default configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

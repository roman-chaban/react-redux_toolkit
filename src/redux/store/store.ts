import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../todoSlice/todoSlice';

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = configureStore({
  reducer: {
    todos: rootReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

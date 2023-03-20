// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './features/auth/reducer';
import tasksReducer from './features/tasks/reducer';

const store = createStore(
  combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
  }),
  composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

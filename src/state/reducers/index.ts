import { combineReducers } from 'redux';
import daysReducer from './days';
import optionsReducer from './options';

const reducers = combineReducers({
  data: daysReducer,
  options: optionsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;

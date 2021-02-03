import { combineReducers } from 'redux';

import counterReducer from '../reducers/counter.reducer';
import authReducer from '../reducers/auth.reducer';

const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default allReducers;

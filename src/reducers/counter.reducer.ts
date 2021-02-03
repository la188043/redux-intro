import { AnyAction } from 'redux';

import { INCREMENT, DECREMENT } from '../actions/counter.actionTypes';

const counterReducer = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

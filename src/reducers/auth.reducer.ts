import { AnyAction } from 'redux';

import { SIGN_IN, SIGN_OUT } from '../actions/auth.actionTypes';

const authReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN:
      return true;
    case SIGN_OUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;

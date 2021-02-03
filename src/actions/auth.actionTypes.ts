import makeGetActionType from '../utils/makeGetActionType.utils';

const getActionType = makeGetActionType('auth');

export const SIGN_IN = getActionType('sign-in');
export const SIGN_OUT = getActionType('sign-out');

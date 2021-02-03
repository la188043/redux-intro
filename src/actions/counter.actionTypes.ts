import makeGetActionType from '../utils/makeGetActionType.utils';

const getActionType = makeGetActionType('counter');

export const INCREMENT = getActionType('increment');
export const DECREMENT = getActionType('decrement');

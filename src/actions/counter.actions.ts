import { Dispatch } from 'redux';

import createAction from '../utils/createAction.utils';

import { INCREMENT, DECREMENT } from '../actions/counter.actionTypes';

export const incrementCounter = (amount: number) => (dispatch: Dispatch) =>
  dispatch(createAction(INCREMENT, amount));

export const decrementCounter = (amount: number) => (dispatch: Dispatch) =>
  dispatch(createAction(DECREMENT, amount));

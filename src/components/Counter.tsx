import { useSelector, useDispatch } from 'react-redux';

import createAction from '../utils/createAction.utils';

import { INCREMENT, DECREMENT } from '../actions/counter.actionTypes';
import { RootState } from '../reducers/RootState';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter {counter}</h1>
      <div className="buttons">
        <button
          className="button"
          onClick={() => dispatch(createAction(INCREMENT, 10))}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => dispatch(createAction(DECREMENT, 10))}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;

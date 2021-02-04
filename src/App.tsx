import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import createAction from './utils/createAction.utils';

import { INCREMENT, DECREMENT } from './actions/counter.actionTypes';
import { SIGN_IN, SIGN_OUT } from './actions/auth.actionTypes';

const App = () => {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const isLogged = useSelector((state: RootStateOrAny) => state.auth);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={() => dispatch(createAction(INCREMENT, 10))}>+</button>
        <button onClick={() => dispatch(createAction(DECREMENT, 10))}>-</button>
      </div>

      {isLogged && <h3>Information I shouldn't see if I'm not logged in</h3>}
      <div>
        <button onClick={() => dispatch(createAction(SIGN_IN))}>Log in</button>
        <button onClick={() => dispatch(createAction(SIGN_OUT))}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default App;

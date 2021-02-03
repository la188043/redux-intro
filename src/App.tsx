import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { INCREMENT, DECREMENT } from './actions/counter.actionTypes';
import { SIGN_IN, SIGN_OUT } from './actions/auth.actionTypes';

function App() {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const isLogged = useSelector((state: RootStateOrAny) => state.auth);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(INCREMENT)}>+</button>
      <button onClick={() => dispatch(DECREMENT)}>-</button>

      {isLogged && <h3>Information I shouldn't see if I'm not logged in</h3>}
      <button onClick={() => dispatch(SIGN_IN)}>Log in</button>
      <button onClick={() => dispatch(SIGN_OUT)}>Log out</button>
    </div>
  );
}

export default App;
